import {
  IsUrl,
  MinLength,
  MaxLength,
  IsOptional,
  IsIn,
  IsArray,
  IsString,
  IsNumber,
  IsBoolean,
  IsMobilePhone,
  ValidateNested,
  Min,
} from 'class-validator';
import { ActiveAddressDto } from './ActiveAddress.dto';
import { Type } from 'class-transformer';

export class CreateActiveDto {
  @IsUrl()
  avatar: string;

  @MinLength(1)
  @MaxLength(500)
  title: string;

  @IsOptional()
  @IsIn(['people', 'club'])
  organizer_type: 'people' | 'club';

  @IsOptional()
  @MinLength(1)
  @MaxLength(500)
  venue_number?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(32)
  active_start_time: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(32)
  active_end_time?: string;

  @IsArray()
  active_date: string[];

  @IsOptional()
  @IsString()
  desc?: string;

  @IsArray()
  @IsOptional()
  pictures?: string[];

  @IsOptional()
  @IsNumber()
  @Min(0)
  registration_deadline?: number;

  @IsNumber()
  @Min(0)
  registration_count: number;

  @IsNumber()
  @Min(0)
  registration_fee: number;

  @IsIn(['offline', 'qrcode'])
  charge_type: string;

  @IsOptional()
  @IsString()
  qr_code_image?: string;

  @IsOptional()
  @IsBoolean()
  lady_discount: boolean;

  @IsOptional()
  @IsNumber()
  lady_level?: number;

  @IsOptional()
  @IsNumber()
  man_level?: number;

  @IsBoolean()
  allow_guests: boolean;

  @IsNumber()
  max_guests: number;

  @IsBoolean()
  auto_cancel: boolean;

  @IsOptional()
  @IsNumber()
  date_limit?: number;

  @IsOptional()
  @IsNumber()
  numbers_limit?: number;

  @IsString()
  @MinLength(1)
  @MaxLength(32)
  username: string;

  @IsMobilePhone('zh-CN')
  phone: string;

  @MinLength(1)
  @MaxLength(32)
  weixin: string;

  @ValidateNested()
  @Type(() => ActiveAddressDto)
  address: ActiveAddressDto;
}
