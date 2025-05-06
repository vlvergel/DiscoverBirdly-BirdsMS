import { Module } from '@nestjs/common';
import { BirdsModule } from './birds/birds.module';

@Module({
  imports: [BirdsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
