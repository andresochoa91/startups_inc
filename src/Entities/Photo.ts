import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  url!: string;

  @Column()
  userId!: number;
  @ManyToOne(() => User, user => user.photos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: "userId" })
  user!: User;
}