import { Injectable } from '@nestjs/common';
import { ItemEntity } from './Item.entity';

@Injectable()
export class ItemRepository {
  private itens: ItemEntity[] = [];

  private buscarItemPorId(id: string) {
    const possivelItem = this.itens.find((item) => item.id === id);

    if (!possivelItem) {
      throw new Error('Item não existe');
    }

    return possivelItem;
  }

  async salvar(dados: ItemEntity) {
    this.itens.push(dados);
  }
  async listar() {
    return this.itens;
  }

  async atualizar(id: string, dadoAtualizados: Partial<ItemEntity>) {
    const possivelItem = this.buscarItemPorId(id);

    Object.entries(dadoAtualizados).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      possivelItem[chave] = valor;
    });

    return possivelItem;
  }

  async remover(id: string) {
    this.itens = this.itens.filter((item) => item.id !== id);
    return;
  }
}
