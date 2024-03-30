import { IsOptional, IsIn, IsString, MaxLength, IsDate, IsNumberString } from 'class-validator';

export class GetActivesDto {
  @IsOptional()
  @IsString()
  @MaxLength(200)
  title: string;

  @IsString()
  @IsOptional()
  sport_type: string;

  @IsDate()
  @IsOptional()
  date: string;

  @IsOptional()
  @IsIn(['distance'])
  sort?: 'distance';

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @IsNumberString()
  page?: string;

  @IsOptional()
  @IsNumberString()
  size?: string;
}
