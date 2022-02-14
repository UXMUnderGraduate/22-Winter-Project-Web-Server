import { Module } from '@nestjs/common';
import { BloomfilterService } from './bloomfilter.service';
import { BloomfilterController } from './bloomfilter.controller';

@Module({
  controllers: [BloomfilterController],
  providers: [BloomfilterService],
})
export class BloomfilterModule {}
