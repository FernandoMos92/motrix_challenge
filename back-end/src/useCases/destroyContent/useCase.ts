import { ContentNotFoundError } from '../errors';
import { GetContentByIdRepository } from '../updateContent';
import { DestroyContentRepository } from './repositories'

export type Params = {
  id: number;
  destroyContentRepository: DestroyContentRepository;
  getContentByIdRepository: GetContentByIdRepository
};

export type Output = Promise<void>;
export type useCase = (params: Params) => Output;

export const destroyContentUseCase = async ({ id, destroyContentRepository, getContentByIdRepository }: Params): Output => {
  const content = await getContentByIdRepository(id);
  if (!content) {
    throw new ContentNotFoundError(id);
  }
  
  await destroyContentRepository(content)
}
