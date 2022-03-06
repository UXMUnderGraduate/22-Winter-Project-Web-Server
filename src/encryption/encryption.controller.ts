import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EncryptionService } from './encryption.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('encryption')
export class EncryptionController {
    constructor(private readonly encryptionService: EncryptionService ) {}

    // @Get()
    // audioEncryption() {
    //     return this.encryptionService.audioEncryption();
    // }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return this.encryptionService.audioEncryption(file);
    }   
}
