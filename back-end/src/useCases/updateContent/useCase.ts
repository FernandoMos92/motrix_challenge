import { Content } from '@/entities/content';
import { ContentNotFoundError } from '../errors';
import { GetContentByIdRepository, UpdateContentRepository } from './repositories';

export type Params = {
  input: Input;
  updateContentRepository: UpdateContentRepository;
  getContentByIdRepository: GetContentByIdRepository;
};
export type Input = Pick<Content, 'id' | 'title' | 'body'>;
export type Output = Promise<Content>;

export const updateContentUseCase = async ({ input, updateContentRepository, getContentByIdRepository }: Params): Output => {
  const content = await getContentByIdRepository(input.id);
  if (!content) {
    throw new ContentNotFoundError(input.id);
  }

  const updatedContent = await updateContentRepository(input);
  return updatedContent;
};