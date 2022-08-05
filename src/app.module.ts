import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { IpfsModule } from './ipfs/ipfs.module';
import { ContractModule } from './contract/contract.module';
import { UserModule } from './user/user.module';
import { AudioModule } from './audio/audio.module';
import { BloomfilterModule } from './bloomfilter/bloomfilter.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './logger.middleware';
import { MusicModule } from './music/music.module';
import { FingerprintModule } from './fingerprint/fingerprint.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5000,
      name: process.env.DB_NAME || 'uxmusic',
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWROD || 'mysql',
      autoLoadEntities: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    IpfsModule,
    ContractModule,
    UserModule,
    AudioModule,
    BloomfilterModule,
    MusicModule,
    FingerprintModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
