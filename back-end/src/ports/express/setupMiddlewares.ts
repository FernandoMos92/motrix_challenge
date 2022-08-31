import { json } from 'express';

const setupMiddlewares = (app: any) => {
  app.use(json());
};

export default setupMiddlewares;
