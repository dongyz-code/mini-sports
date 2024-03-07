import { IsString, IsNumber, IsOptional } from 'class-validator';

export class ActiveAddressDto {
  @IsString()
  name: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  province: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  district: string;
}
