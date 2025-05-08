import { PartialType } from '@nestjs/mapped-types';
import { CreateBirdDto } from './create-bird.dto';
import { IsString } from 'class-validator';

export class UpdateBirdDto extends PartialType(CreateBirdDto) {
  @IsString()
  id: string;
}
