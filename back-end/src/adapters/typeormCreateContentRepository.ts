import { AppDataSource } from '@/ports/typeorm';
import { Content } from '@/ports/typeorm/models/content';
import { Input } from '@/useCases/createContent/useCase';

export const typeormCreateContentRepository = async (
  input: Input
): Promise<Content> => {
  const repository = AppDataSource.getRepository(Content);
  const contentToCreate = repository.create(input as Partial<Content>);
  const savedContent = await repository.save(contentToCreate);
  return savedContent;
};
