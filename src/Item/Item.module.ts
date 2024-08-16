import { Module } from '@nestjs/common';
import { ItemController } from './Item.controller';
import { ItemRepository } from './Item.repository';

@Module({
  controllers: [ItemController],
  providers: [ItemRepository],
})
export class ItemModule {}
