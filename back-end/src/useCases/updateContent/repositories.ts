import { Content } from '@/entities/content';
import { ContentHistory } from '@/entities/contentHistory';

export type UpdateContentRepository = (content: Content) => Promise<Content>;
export type GetContentByIdRepository = (id: number) => Promise<Content | null>
export type AddContentHistoryRepository = (content:Content) => Promise<ContentHistory> 