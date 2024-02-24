import { MaxLength, MinLength } from 'class-validator';

export class GetUploadUrlParamsDto {
  @MinLength(1)
  @MaxLength(200)
  filePath: string;
}
