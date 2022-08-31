import { Content } from '@/entities/content';
import { Input } from './useCase';


export type UpdateContentRepository = (input: Input) => Promise<Content>;
export type GetContentByIdRepository = (id: number) => Promise<Content | undefined>