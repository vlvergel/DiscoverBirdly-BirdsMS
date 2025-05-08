import { IsOptional, IsString } from 'class-validator';

export class CreateSpeciesDto {
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  description?: string;
}
