import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemRepository } from './Item.repository';
import { CreateItemDto } from './create-item.dto';
import { ItemEntity } from './Item.entity';

import { v4 as uuid } from 'uuid';
import { DadosAtualizadoDTO } from './update-item.dto';

@Controller('/item')
export class ItemController {
  constructor(private itemRepository: ItemRepository) {}

  @Post()
  async criarProduto(@Body() dados: CreateItemDto) {
    const item = new ItemEntity();

    item.id = uuid();
    item.name = dados.name;
    item.description = dados.description;

    await this.itemRepository.salvar(item);

    return item;
  }

  @Get()
  async listarItens() {
    const itens = await this.itemRepository.listar();
    return itens;
  }

  @Put('/:id')
  async atualizarItem(
    @Param('id') id: string,
    @Body() dadoAtualizados: DadosAtualizadoDTO,
  ) {
    const itemAtualizado = await this.itemRepository.atualizar(
      id,
      dadoAtualizados,
    );

    return itemAtualizado;
  }

  @Delete('/:id')
  async removerItem(@Param('id') id: string) {
    this.itemRepository.remover(id);
    return;
  }
}
