import { json } from 'express';

// TODO: fix any
const setupMiddlewares = (app: any) => {
  app.use(json());
};

export default setupMiddlewares;
