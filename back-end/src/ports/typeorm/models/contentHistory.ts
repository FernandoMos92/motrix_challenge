import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Content } from './content';

@Entity()
export class ContentHistory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({nullable:true})
  body?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne( () => Content, { onDelete: 'CASCADE' })
  content!:Content
}