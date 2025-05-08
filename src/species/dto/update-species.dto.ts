import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeciesDto } from './create-species.dto';
import { IsString } from 'class-validator';

export class UpdateSpeciesDto extends PartialType(CreateSpeciesDto) {
  @IsString()
  id: string;
}
