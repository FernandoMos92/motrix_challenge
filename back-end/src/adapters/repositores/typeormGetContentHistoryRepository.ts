import { AppDataSource } from '@/ports/typeorm';
import { Content } from '@/ports/typeorm/models/content';
import { ContentHistory } from '@/ports/typeorm/models/contentHistory';

export const typeormGetContentHistoryRepository = async (content: Content): Promise<ContentHistory[]> => {
  const repository = AppDataSource.getRepository(ContentHistory);
  const contentHistory = await repository.find({where:{ content: { id:content.id } }})
  return contentHistory;
}