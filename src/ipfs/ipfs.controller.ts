import {
  Controller,
  Get,
  Post,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { IpfsService } from './ipfs.service';

@Controller('ipfs')
export class IpfsController {
  constructor(private readonly ipfsService: IpfsService) {}

  @UseInterceptors(FileInterceptor('audiofile'))
  @Post()
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.ipfsService.upload(file);
  }

  @Get(':cid')
  download(@Param('cid') cid: string) {
    return this.ipfsService.download(cid);
  }
}
