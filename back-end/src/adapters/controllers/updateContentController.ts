import { Content } from '@/entities/content';
import { ContentNotFoundError } from '@/useCases/errors';
import {
  AddContentHistoryRepository,
  GetContentByIdRepository,
  Input,
  UpdateContentRepository,
  useCase
} from '@/useCases/updateContent';
import { Request, Response } from 'express';

type Params = {
  updateContentUseCase: useCase;
  updateContentRepository: UpdateContentRepository;
  addContentHistoryRepository: AddContentHistoryRepository;
  getContentByIdRepository: GetContentByIdRepository;
};

export const setupUpdateContentController =
  ({ updateContentUseCase, updateContentRepository, addContentHistoryRepository, getContentByIdRepository }: Params) =>
  async (req:Request, res:Response): Promise<Response> => {
    try {
      const input: Input = {
      id: parseInt(req.params.id),
      title: req.body.title,
      body: req.body.body,
    };
    const content = await updateContentUseCase({input, updateContentRepository, addContentHistoryRepository, getContentByIdRepository});
    return res.status(200).json(content);
    } catch (error) {
      if (error instanceof ContentNotFoundError) {
          return res.status(404).end()
        }
        return res.status(500).end()
    }
  };
