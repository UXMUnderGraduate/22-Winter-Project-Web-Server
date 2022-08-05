import { Injectable, NotFoundException } from '@nestjs/common';
import { createReadStream, writeFileSync } from 'fs';
import { create, IPFS } from 'ipfs-core';
import { buffer } from 'stream/consumers';

@Injectable()
export class IpfsService {
  private _ipfs: Promise<IPFS> = create();

  async upload(file: Express.Multer.File): Promise<string> {
    console.log(`content-type : ${file.mimetype}`);
    // encoding을 내가 원하는 방식으로 한 binary를 넣어야 한다.
    const encodedString: string = Buffer.from(file.buffer).toString('base64');
    const result = await (await this._ipfs).add(encodedString);
    return result.cid.toString();
  }

  async download(cid: string) {
    const stream: AsyncIterable<Uint8Array> = (await this._ipfs).cat(cid);
    if (stream == null) {
      throw new NotFoundException();
    }
    let decodedString = '';
    const sumArrayLength = 0;
    for await (const chunk of stream) {
      decodedString += Buffer.from(chunk).toString('base64');
    }
    return decodedString;
    let offset = 0;

    const arrayBuffer = new Uint8Array(sumArrayLength);
    for await (const chunk of stream) {
      arrayBuffer.set(chunk, offset);
      offset += chunk.length;
    }

    console.log(arrayBuffer.length);

    // binary를 decoding 한 뒤에 file로 변환한다.
    return arrayBuffer.toString;
    console.log('decode 직전');

    const filePath = 'test.txt';
    writeFileSync(filePath, arrayBuffer, { encoding: 'utf-8' });
    return createReadStream(filePath);
  }
}
