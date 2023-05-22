import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 16)
  password: string;

  roles: string[];
}
