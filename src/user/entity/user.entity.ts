import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@Entity()
export class Seller {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  @IsEmail()
  @IsNotEmpty()
  @Length(0, 512)
  email: string;

  @Column({
    nullable: false,
  })
  @IsNotEmpty()
  @Length(60, 60)
  password: string;

  @Column({
    unique: true,
    nullable: false,
  })
  @IsNotEmpty()
  @Length(0, 512)
  metamask_address: string;

  @Column({
    nullable: false,
  })
  @IsNotEmpty()
  @Length(1, 31)
  nickname: string;

  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
