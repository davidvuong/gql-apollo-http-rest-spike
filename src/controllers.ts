import express from 'express';
import { constants } from 'http2';
import { NotFoundError } from './errors';

export const PatientsController = (dataset: any): express.Router => {
  const router = express.Router({ mergeParams: true });

  router.get('/:id', (req, res) => {
    const response = dataset.patients.find(s => s.ID_ === req.params.id);
    if (!response) {
      throw new NotFoundError(`ResourceDoesNotExist: ${req.params.id}`);
    }
    res.status(constants.HTTP_STATUS_OK).json(response);
  });

  return router;
};

export const StudiesController = (dataset: any): express.Router => {
  const router = express.Router({ mergeParams: true });

  router.get('/:id', (req, res) => {
    const response = dataset.studies.find(s => s.ID_ === req.params.id);
    if (!response) {
      throw new NotFoundError(`ResourceDoesNotExist: ${req.params.id}`);
    }
    res.status(constants.HTTP_STATUS_OK).json(response);
  });

  return router;
};
