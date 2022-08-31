import { AppDataSource } from '@/ports/typeorm';
import { Content } from '@/ports/typeorm/models/content';
import { ContentHistory } from '@/ports/typeorm/models/contentHistory';

export const typeormAddContentHistoryRepository = async (content: Content): Promise<ContentHistory> => {
  const repository = AppDataSource.getRepository(ContentHistory);
  const createContent = repository.create({ title: content.title, body: content.title, content } as unknown as Content)
  const contentHistory = await repository.save(createContent)
  return contentHistory;
}