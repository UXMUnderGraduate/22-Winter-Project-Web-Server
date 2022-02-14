import { Injectable } from '@nestjs/common';
import { CreateBloomfilterDto } from './dto/create-bloomfilter.dto';
import { UpdateBloomfilterDto } from './dto/update-bloomfilter.dto';

@Injectable()
export class BloomfilterService {
  create(createBloomfilterDto: CreateBloomfilterDto) {
    return 'This action adds a new bloomfilter';
  }

  findAll() {
    return `This action returns all bloomfilter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloomfilter`;
  }

  update(id: number, updateBloomfilterDto: UpdateBloomfilterDto) {
    return `This action updates a #${id} bloomfilter`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloomfilter`;
  }
}
