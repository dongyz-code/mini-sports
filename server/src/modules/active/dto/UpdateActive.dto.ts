import { IsString } from 'class-validator';
import { CreateActiveDto } from './CreateActive.dto';

export class UpdateActiveDto extends CreateActiveDto {
  @IsString()
  id: string;
}
