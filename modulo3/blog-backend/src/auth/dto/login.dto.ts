import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email?: string;

  @IsNotEmpty()
  @IsString()
  username?: string;

  @IsString()
  @IsNotEmpty()
  password?: string;
}