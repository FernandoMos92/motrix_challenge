import { Content } from '@/entities/content';

export type ListContentsRepository = () => Promise<Content[]>