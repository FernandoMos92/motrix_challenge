import Express from 'express';
import setupMiddlewares from './setupMiddlewares';
import setupRoutes from './setupRoutes';

export const app = Express();

setupMiddlewares(app);
setupRoutes(app);
