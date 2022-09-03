import { ContentHistory } from "@/entities/contentHistory";
import { Content } from '@/entities/content';

export type GetContentHistories = (content: Content) => Promise<ContentHistory[]>;