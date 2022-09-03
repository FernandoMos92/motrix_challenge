import { ContentHistory } from '@/entities/contentHistory';
import { ContentNotFoundError } from '../errors';
import { GetContentByIdRepository } from '../updateContent';
import { GetContentHistories } from './repositories'

export type Params = {
  id: number;
  getContentHistoriesRepository: GetContentHistories;
  getContentByIdRepository: GetContentByIdRepository
};

export type Output = Promise<ContentHistory[]>;
export type useCase = (params: Params) => Output;

export const getContentHistoriesUseCase = async ({ id, getContentHistoriesRepository, getContentByIdRepository }: Params): Output => {
  const content = await getContentByIdRepository(id);
  if (!content) {
    throw new ContentNotFoundError(id);
  }
  
 return getContentHistoriesRepository(content)
}
