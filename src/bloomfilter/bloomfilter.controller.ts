import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BloomfilterService } from './bloomfilter.service';
import { CreateBloomfilterDto } from './dto/create-bloomfilter.dto';
import { UpdateBloomfilterDto } from './dto/update-bloomfilter.dto';

@Controller('bloomfilter')
export class BloomfilterController {
  constructor(private readonly bloomfilterService: BloomfilterService) {}

  // @Post()
  // create(@Body() createBloomfilterDto: CreateBloomfilterDto) {
  //   return this.bloomfilterService.create();
  // }

  // @Get()
  // findAll() {
  //   return this.bloomfilterService.findAll();
  // }
  @Get()
  create() {
    return this.bloomfilterService.create();
  }

  @Get(':sign')
  check(@Param('sign') sign: string) {
    return this.bloomfilterService.check(sign);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateBloomfilterDto: UpdateBloomfilterDto,
  // ) {
  //   return this.bloomfilterService.update(+id, updateBloomfilterDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bloomfilterService.remove(+id);
  //}
}
