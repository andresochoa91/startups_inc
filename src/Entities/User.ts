import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  username!: string;

  @Column({ nullable: false })
  password!: string;  

  @OneToMany(() => Photo, photo => photo.user, { cascade: true })
  photos!: Photo[];
}