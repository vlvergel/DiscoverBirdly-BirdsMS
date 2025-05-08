import { IsOptional, IsString } from 'class-validator';

export class CreateHabitatDto {
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  description?: string;
}
