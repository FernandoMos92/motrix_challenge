import { AppDataSource } from '@/ports/typeorm';
import { Content } from '@/ports/typeorm/models/content';

export const typeormUpdateContentRepository = async (content: Content): Promise<Content> => {
  const repository = AppDataSource.getRepository(Content);
  await repository.update(content.id, content)
  const updatedContent = await repository.findOneBy({ id: content.id }) as Content
  return updatedContent
};
 