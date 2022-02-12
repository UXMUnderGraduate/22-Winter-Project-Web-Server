import { Injectable } from '@nestjs/common';
import { CreateIpfDto } from './dto/create-ipf.dto';
import { UpdateIpfDto } from './dto/update-ipf.dto';

@Injectable()
export class IpfsService {
  create(createIpfDto: CreateIpfDto) {
    return 'This action adds a new ipf';
  }

  findAll() {
    return `This action returns all ipfs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ipf`;
  }

  update(id: number, updateIpfDto: UpdateIpfDto) {
    return `This action updates a #${id} ipf`;
  }

  remove(id: number) {
    return `This action removes a #${id} ipf`;
  }
}
