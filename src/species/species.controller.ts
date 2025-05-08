import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SpeciesService } from './species.service';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { UpdateSpeciesDto } from './dto/update-species.dto';

@Controller()
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @MessagePattern('createSpecies')
  create(@Payload() createSpeciesDto: CreateSpeciesDto) {
    return this.speciesService.create(createSpeciesDto);
  }

  @MessagePattern('findAllSpecies')
  findAll() {
    return this.speciesService.findAll();
  }

  @MessagePattern('findOneSpecies')
  findOne(@Payload() id: number) {
    return this.speciesService.findOne(id);
  }

  @MessagePattern('updateSpecies')
  update(@Payload() updateSpeciesDto: UpdateSpeciesDto) {
    return this.speciesService.update(updateSpeciesDto.id, updateSpeciesDto);
  }

  @MessagePattern('removeSpecies')
  remove(@Payload() id: number) {
    return this.speciesService.remove(id);
  }
}
