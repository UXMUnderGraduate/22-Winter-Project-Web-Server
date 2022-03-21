import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FingerprintService } from './fingerprint.service';
import { FingerprintController } from './fingerprint.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [HttpModule, MulterModule.register({ dest: './upload' })],
  providers: [FingerprintService],
  exports: [FingerprintService],
  controllers: [FingerprintController],
})
export class FingerprintModule {}
