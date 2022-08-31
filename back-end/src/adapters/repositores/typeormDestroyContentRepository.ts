import { AppDataSource } from '@/ports/typeorm';
import { Content } from '@/ports/typeorm/models/content';

export const typeormDestroyContentRepository = async (
  content:Content
): Promise<void> => {
  const repository = AppDataSource.getRepository(Content);
  await repository.remove(content)
};
