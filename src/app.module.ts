import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IpfsModule } from './ipfs/ipfs.module';
import { ContractModule } from './contract/contract.module';
import { UserModule } from './user/user.module';
import { AudioModule } from './audio/audio.module';
import { BloomfilterModule } from './bloomfilter/bloomfilter.module';

@Module({
  imports: [
    IpfsModule,
    ContractModule,
    UserModule,
    AudioModule,
    BloomfilterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
