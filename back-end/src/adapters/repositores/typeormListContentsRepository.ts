import { AppDataSource } from '@/ports/typeorm';
import { Content } from '@/ports/typeorm/models/content';

export const typeormListContentsRepository = async (
): Promise<Content[]> => {
  const repository = AppDataSource.getRepository(Content);
  const contents = await repository.find();
  return contents;
};
