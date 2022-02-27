import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Music {
  @IsString()
  @IsNotEmpty()
  musicName: string;

  @IsString()
  @IsNotEmpty()
  albumName: string;

  @IsString()
  @IsNotEmpty()
  copyrighterName: string;

  @IsString()
  @IsNotEmpty()
  copyrighterAddress: string;

  @IsNumber()
  @IsNotEmpty()
  copyrighterRoyalty: number;

  @IsString()
  @IsNotEmpty()
  playerName: string;

  @IsString()
  @IsNotEmpty()
  playerAddress: string;

  @IsNumber()
  @IsNotEmpty()
  playerRoyalty: number;

  @IsString()
  @IsNotEmpty()
  agencyName: string;

  @IsString()
  @IsNotEmpty()
  agencyAddress: string;

  @IsNumber()
  @IsNotEmpty()
  agencyRoyalty: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  toArgs() {
    const args = [
      this.musicName,
      this.albumName,
      this.copyrighterName,
      this.copyrighterRoyalty,
      this.playerName,
      this.playerAddress,
      this.playerRoyalty,
      this.agencyName,
      this.agencyAddress,
      this.agencyRoyalty,
    ];
    return args;
  }
}
