import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;  

  @OneToMany(() => Photo, photo => photo.user)
  photos!: Photo[];
}