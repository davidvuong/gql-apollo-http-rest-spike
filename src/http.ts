import { split, trim, parseInt } from 'lodash';
import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import winston from 'winston';
import { Writable } from 'stream';
import { constants } from 'http2';
import { DecodeJsonError, handleHttpError } from './errors';
import { genRepoositoryDataset, logDatasetUUIDs } from './gen';
import { PatientsController, StudiesController } from './controllers';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

class MorganStreamWritable extends Writable {
  _write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void {
    if (encoding === 'buffer') {
      const [status, logLine] = split(trim(chunk.toString('ascii')), '|');
      const statusCode = parseInt(status);
      switch (true) {
        case statusCode < constants.HTTP_STATUS_BAD_REQUEST:
          logger.info(logLine);
          break;
        default:
          logger.error(logLine);
      }
    }
    callback();
  }
}

const config = {
  port: 8081,
};

const app = express();
app.disable('x-powered-by');
app.disable('etag');
app.use(compression());
app.use(express.json({ limit: '10mb' }));

app.use(
  // NOTE: the log format tied to stream consumer expected format specifically ':status|'
  morgan(':status|HTTP API :method :url - status=:status - len=:res[content-length] - ms=:response-time', {
    skip: (req: express.Request, res: express.Response): boolean => {
      return req.originalUrl === '/health';
    },
    stream: new MorganStreamWritable(),
  }),
);

const dataset = genRepoositoryDataset();
logDatasetUUIDs(dataset, logger);

app.use('/patients', PatientsController(dataset));
app.use('/studies', StudiesController(dataset));

app.use('/', (req, res) => {
  res.status(constants.HTTP_STATUS_NOT_FOUND).json({ error: 'Route not found' });
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof SyntaxError) {
    handleHttpError({ err: new DecodeJsonError(err), req, res, logger });
  } else {
    handleHttpError({ err, req, res, logger });
  }
});

app.listen(config.port, () => {
  logger.info(`http-rest-api server started and listening to requests 0.0.0.0:${config.port}`);
});
