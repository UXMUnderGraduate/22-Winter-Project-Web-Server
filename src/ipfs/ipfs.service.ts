import { Injectable } from '@nestjs/common';
import { create } from 'ipfs';
@Injectable()
export class IpfsService {
  constructor(private ipfs) {
    ipfs = create({});
  }
  upload(file: Express.Multer.File) {
    ipfs.files.add();
    return `upload`;
  }

  download(cid: string) {
    return `${cid} file`;
  }
}
