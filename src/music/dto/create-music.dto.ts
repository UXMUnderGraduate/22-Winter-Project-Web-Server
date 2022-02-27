import { PickType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Music } from '../entities/music.entity';

export class CreateMusicDto extends PickType(Music, [
  'musicName',
  'albumName',
  'price',
]) {
  @IsString()
  @IsNotEmpty()
  copyrighterEmail: string;

  @IsNumber()
  @IsNotEmpty()
  copyrighterRoyaltyRate: number;

  @IsString()
  @IsNotEmpty()
  playerEmail: string;

  @IsNumber()
  @IsNotEmpty()
  playerRoyaltyRate: number;

  @IsString()
  @IsNotEmpty()
  agencyEmail: string;

  @IsNumber()
  @IsNotEmpty()
  agencyRoyaltyRate: number;
}
