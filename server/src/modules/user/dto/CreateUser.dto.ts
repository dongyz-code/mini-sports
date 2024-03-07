import { MaxLength, MinLength, Min, Max, IsEmail, IsOptional, IsIn } from 'class-validator';

export class CreateUserDto {
  @MinLength(1)
  @MaxLength(64)
  code: string;

  @MinLength(1)
  @MaxLength(64)
  username: string;

  @MinLength(1)
  avatar: string;

  @IsOptional()
  @MinLength(1)
  @MaxLength(200)
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(1)
  @MaxLength(200)
  phone?: string;

  @IsOptional()
  @MinLength(1)
  @MaxLength(200)
  weixin?: string;

  @IsOptional()
  @Min(1)
  @Max(9)
  level?: number;

  @IsOptional()
  @Min(1)
  @Max(200)
  weight?: number;

  @IsOptional()
  @IsIn(['F', 'M'])
  gender?: 'F' | 'M';
}
