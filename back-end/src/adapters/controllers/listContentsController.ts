import { ContentNotFoundError } from '@/useCases/errors';
import {
  ListContentsRepository,
  UseCase,
} from '@/useCases/listContents';
import { Request, Response } from 'express';

type Params = {
  listContentsUseCase: UseCase;
  listContentsRepository: ListContentsRepository;
};

export const setupListContentsController =
  ({ listContentsUseCase, listContentsRepository }: Params) => async (_req:Request, res:Response): Promise<Response | undefined> => {
    try {
      const contents = await listContentsUseCase({ listContentsRepository });
      
      return res.status(200).json(contents)
    } catch (error) {
       if (error instanceof ContentNotFoundError) {
          return res.status(404).end()
        }
        return res.status(500).end()
    }
  };
