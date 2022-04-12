import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, lastValueFrom } from 'rxjs';
import { default as FormData } from 'form-data';
import { createReadStream } from 'fs';

@Injectable()
export class FingerprintService {
  constructor(private readonly httpService: HttpService) {}

  async getFingerPrint(file: Express.Multer.File) {
    const formData = new FormData();
    formData.append('originFile', createReadStream(file.path) || 'NA');
    const result = await lastValueFrom(
      this.httpService
        .post('http://172.30.1.3:5000/finger-print', formData, {
          headers: { ...formData.getHeaders() },
        })
        .pipe(
          map((res) => {
            console.log(`signature hash : ${res.data.data}`);
            return res.data;
          }),
        ),
    );
    return result;
  }
}
