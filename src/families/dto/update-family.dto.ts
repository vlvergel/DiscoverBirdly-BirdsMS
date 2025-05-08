import { PartialType } from '@nestjs/mapped-types';
import { CreateFamilyDto } from './create-family.dto';
import { IsString } from 'class-validator';

export class UpdateFamilyDto extends PartialType(CreateFamilyDto) {
  @IsString()
  id: string;
}
