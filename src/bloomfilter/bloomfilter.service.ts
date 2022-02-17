import { Injectable } from '@nestjs/common';
import { CreateBloomfilterDto } from './dto/create-bloomfilter.dto';
import { UpdateBloomfilterDto } from './dto/update-bloomfilter.dto';
import { BloomFilter } from 'bloom-filters';
import BaseFilter from 'bloom-filters/dist/base-filter';

@Injectable()
export class BloomfilterService {
  // 블룸필터 객체 하나 생성
  bf = new BloomFilter(16, 3);

  // 받아온 시그니쳐 파일이 이미 블룸필터에 있는지 확인
  // 없으면 add후 true 반환, 있으면 false만 반환
  check(sign: string) {
    const has = this.bf.has(sign);
    if (has === false) {
      this.bf.add(sign);
      return true;
    } else {
      return false;
    }
  }

  // findAll() {
  //   return `This action returns all bloomfilter`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} bloomfilter`;
  // }

  // update(id: number, updateBloomfilterDto: UpdateBloomfilterDto) {
  //   return `This action updates a #${id} bloomfilter`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} bloomfilter`;
  // }
}
