import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FingerprintService } from './fingerprint.service';

@Controller('fingerprint')
export class FingerprintController {
  constructor(private readonly fingerprintService: FingerprintService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  getMusicHash(@UploadedFile() file: Express.Multer.File) {
    // console.log(file);
    return this.fingerprintService.getFingerPrint(file);
  }
}
