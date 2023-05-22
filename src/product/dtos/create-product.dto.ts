import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  name: string;

  description: string;

  @IsNumber()
  price: number;

  @IsNotEmpty()
  category: string;
}
