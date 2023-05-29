import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

}