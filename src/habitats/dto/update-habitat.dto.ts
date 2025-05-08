import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitatDto } from './create-habitat.dto';
import { IsString } from 'class-validator';

export class UpdateHabitatDto extends PartialType(CreateHabitatDto) {
  @IsString()
  id: string;
}
