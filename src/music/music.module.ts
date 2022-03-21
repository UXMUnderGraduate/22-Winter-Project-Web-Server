import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { UserModule } from 'src/user/user.module';
import { MulterModule } from '@nestjs/platform-express';
import { FingerprintModule } from 'src/fingerprint/fingerprint.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
    UserModule,
    FingerprintModule,
  ],
  controllers: [MusicController],
  providers: [MusicService],
})
export class MusicModule {}
