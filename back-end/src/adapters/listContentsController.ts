import { Content } from '@/entities/content';
import {
  ListContentsRepository,
  UseCase,
} from '@/useCases/listContents';

type Params = {
  listContentsUseCase: UseCase;
  listContentsRepository: ListContentsRepository;
};

export const setupListContentsController =
  ({ listContentsUseCase, listContentsRepository }: Params) => async (): Promise<Content[]> => {
    const contents = await listContentsUseCase({listContentsRepository});
    return contents;
  };
