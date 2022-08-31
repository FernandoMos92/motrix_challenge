import { Content } from '@/entities/content';
import { ContentNotFoundError } from '../errors';
import { AddContentHistoryRepository, GetContentByIdRepository, UpdateContentRepository } from './repositories';

export type Params = {
  input: Input;
  updateContentRepository: UpdateContentRepository;
  getContentByIdRepository: GetContentByIdRepository;
  addContentHistoryRepository: AddContentHistoryRepository;
};
export type Input = Pick<Content, 'id' | 'title' | 'body'>;
export type Output = Promise<Content>;

export const updateContentUseCase = async ({ input, updateContentRepository, getContentByIdRepository, addContentHistoryRepository }: Params): Output => {
  const content = await getContentByIdRepository(input.id);
  if (!content) {
    throw new ContentNotFoundError(input.id);
  }

  await addContentHistoryRepository(content)
  const updatedContent = await updateContentRepository(input);
  return updatedContent;
};