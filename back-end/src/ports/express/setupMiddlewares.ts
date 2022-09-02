import { json } from 'express';
const cors = require('cors')

const setupMiddlewares = (app: any) => {
  app.use(cors());
  app.use(json());
};

export default setupMiddlewares;
