import { PartialType } from '@nestjs/mapped-types';
import { CreateBloomfilterDto } from './create-bloomfilter.dto';

export class UpdateBloomfilterDto extends PartialType(CreateBloomfilterDto) {}
