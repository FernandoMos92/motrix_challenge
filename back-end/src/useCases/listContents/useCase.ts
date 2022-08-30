import { Content } from '@/entities/content';
import { ListContentsRepository } from './repositories';

export type Params = {
  listContentsRepository: ListContentsRepository
};
export type Output = Promise<Content[]>;

export type UseCase = (params: Params) => Output;

export const listContentsUseCase = async ({ listContentsRepository }: Params): Output => {
  const contents = await listContentsRepository();
  return contents;
};