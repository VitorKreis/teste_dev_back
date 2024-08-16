import { IsOptional, IsString } from 'class-validator';

export class DadosAtualizadoDTO {
  @IsString({ message: 'Name has to be a string' })
  @IsOptional()
  name: string;

  @IsString({ message: 'description has to be a string' })
  @IsOptional()
  description: string;
}
