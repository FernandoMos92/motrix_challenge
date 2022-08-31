import { AppDataSource } from '@/ports/typeorm';
import { Content } from '@/ports/typeorm/models/content';

export const typeormGetContentByIdRepository = async (
  id: number
): Promise<Content | null> => {
  const repository = AppDataSource.getRepository(Content);
  const repsonse = await repository.findOneBy({ id })
  return repsonse;
};
