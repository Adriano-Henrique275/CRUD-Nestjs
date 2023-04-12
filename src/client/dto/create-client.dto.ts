import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, MaxLength, MinLength } from 'class-validator';

export class CreateClientDTO {
  
  @IsNotEmpty()
  @IsString()
  @Length(2, 10)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 8)
  password: string;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(8)
  @MaxLength(11)
  cpf: number;
}