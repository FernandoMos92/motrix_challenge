import { Content } from '@/entities/content';
import { Input } from './useCase';

export type CreateContentRepository = (input: Input) => Promise<Content>;
