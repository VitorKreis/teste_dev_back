import { Module } from '@nestjs/common';
import { ItemModule } from './Item/Item.module';

@Module({
  imports: [ItemModule],
})
export class AppModule {}
