export class CreateBirdDto {
  name: string;
  id_specie: string; // Creo que puede ser otra tabla
  id_family: string; // Creo que puede ser otra tabla
  id_habitat: string; // Creo que puede ser otra tabla
  audio_url: string; // Creo que puede ser otra tabla
  photo: Base64URLString;
  description: string;
}
