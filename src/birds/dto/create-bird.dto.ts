import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateBirdDto {
  @IsString()
  name: string;
  @IsUUID()
  id_specie: string; // Creo que puede ser otra tabla
  @IsUUID()
  id_family: string; // Creo que puede ser otra tabla
  @IsUUID()
  id_habitat: string; // Creo que puede ser otra tabla
  @IsString()
  @IsOptional()
  audio_url?: string; // Creo que puede ser otra tabla
  @IsString()
  photo: Base64URLString;
  @IsString()
  description: string;
}
