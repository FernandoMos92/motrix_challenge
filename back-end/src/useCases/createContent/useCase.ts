import { Content } from '@/entities/content';
import { CreateContentRepository } from './repositories';

export type Params = {
  input: Input;
  createContentRepository: CreateContentRepository;
};
export type Input = Pick<Content, 'title' | 'body'>;
export type Output = Promise<Content>;
export type useCase = (params: Params) => Output;

export const createContentUseCase = async ({
  input,
  createContentRepository,
}: Params): Output => {
  const content = await createContentRepository(input);
  return content;
};
