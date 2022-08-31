import {
  CreateContentRepository,
  Input,
  useCase,
} from '@/useCases/createContent';
import { ContentNotFoundError } from '@/useCases/errors';
import { Response } from 'express';

type Params = {
  createContentUseCase: useCase;
  createContentRepository: CreateContentRepository;
};

export const setupCreateContentController =
  ({ createContentUseCase, createContentRepository }: Params) =>
  async (req:any, res:any): Promise<Response | undefined> => {
    try {
      const input: Input = {
        title: req.body.title,
        body: req.body.body,
      };
      const content = await createContentUseCase({
        input,
        createContentRepository,
      });
      return res.status(201).json(content);
    } catch (error) {
       if (error instanceof ContentNotFoundError) {
          return res.status(404).end()
        }
        return res.status(500).end()
    }
  };
