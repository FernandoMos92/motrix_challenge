import { Content } from '@/entities/content';
import { ContentHistory } from '@/entities/contentHistory';
import { Input } from './useCase';


export type UpdateContentRepository = (input: Input) => Promise<Content>;
export type GetContentByIdRepository = (id: number) => Promise<Content | undefined>
export type AddContentHistoryRepository = (content:Content) => Promise<ContentHistory> 