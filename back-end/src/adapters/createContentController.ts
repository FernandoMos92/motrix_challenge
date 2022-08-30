import { Content } from '@/entities/content';
import {
  CreateContentRepository,
  Input,
  useCase,
} from '@/useCases/createContent';

type Params = {
  createContentUseCase: useCase;
  createContentRepository: CreateContentRepository;
};

export const setupCreateContentController =
  ({ createContentUseCase, createContentRepository }: Params) =>
  async (body: any /* TODO: fix any */): Promise<Content> => {
    const input: Input = {
      title: body.title,
      body: body.body,
    };
    const content = await createContentUseCase({
      input,
      createContentRepository,
    });
    return content;
  };
