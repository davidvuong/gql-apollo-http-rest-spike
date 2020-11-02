import Joi from 'joi';
import { Request, Response } from 'express';
import { constants } from 'http2';
import { Logger } from 'winston';
import { isNil } from 'lodash';

export class ApiError extends Error {
  message: string;

  constructor(messageOrError: string | Error) {
    const message = messageOrError instanceof Error ? messageOrError.message : messageOrError;
    super(message);
    this.message = message;
  }
}

const isJoiError = (err: Error | Joi.ValidationError): err is Joi.ValidationError => {
  return (err as Joi.ValidationError).isJoi;
};

export class DecodeJsonError extends ApiError {
  static fromJoiError(err: Error | Joi.ValidationError): DecodeJsonError {
    let errMessage: string;

    if (isJoiError(err)) {
      const firstError = err.details.map(d => d.message)[0].replace(/"/g, "'");
      errMessage = `DecodeJsonError: ${firstError}`;
    } else {
      errMessage = err.toString();
    }
    return new DecodeJsonError(errMessage);
  }
}

export class RepositoryError extends ApiError {}
export class RepositoryConnectionError extends RepositoryError {}
export class RepositoryValidationError extends RepositoryError {}
export class NotFoundError extends ApiError {}
export class ValidationError extends ApiError {}
export class MetricsError extends ApiError {}
export class ServiceError extends ApiError {}
export class HttpError extends ApiError {}
export class BadRequestError extends HttpError {}
export class AuthenticationError extends HttpError {}
export class AuthorizationError extends HttpError {}

export interface ErrorResponse {
  status: number;
  message: string;
}

export function httpStatusCodeFromError(err: ApiError): number {
  switch (true) {
    case err instanceof DecodeJsonError:
    case err instanceof ValidationError:
    case err instanceof RepositoryValidationError:
    case err instanceof BadRequestError:
      return constants.HTTP_STATUS_BAD_REQUEST;
    case err instanceof NotFoundError:
      return constants.HTTP_STATUS_NOT_FOUND;
    case err instanceof RepositoryError:
      return constants.HTTP_STATUS_INTERNAL_SERVER_ERROR;
    case err instanceof AuthenticationError:
      return constants.HTTP_STATUS_FORBIDDEN;
    case err instanceof AuthorizationError:
      return constants.HTTP_STATUS_UNAUTHORIZED;
    default:
      return constants.HTTP_STATUS_INTERNAL_SERVER_ERROR;
  }
}

export function handleHttpError(args: { err: ApiError; req: Request; res: Response; logger: Logger }): ErrorResponse {
  const { err, res, logger } = args;
  const status = httpStatusCodeFromError(err);

  const payload = { error: err.message };
  if (status === constants.HTTP_STATUS_INTERNAL_SERVER_ERROR) {
    payload.error = 'Internal Server Error';

    logger.error(`Handling error - message=${err.message} - name=${err.constructor.name} - status=${status}`);
    if (!isNil(err.stack)) {
      logger.error(err.stack);
    }
  }
  res.status(status).json(payload);

  return { status, message: err.message };
}
