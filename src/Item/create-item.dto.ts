import { IsString } from 'class-validator';

export class CreateItemDto {
  @IsString({ message: 'Name has to be a string' })
  name: string;

  @IsString({ message: 'Description has to be a string' })
  description: string;
}
