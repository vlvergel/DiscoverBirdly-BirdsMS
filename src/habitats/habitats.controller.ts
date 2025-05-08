import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HabitatsService } from './habitats.service';
import { CreateHabitatDto } from './dto/create-habitat.dto';
import { UpdateHabitatDto } from './dto/update-habitat.dto';

@Controller()
export class HabitatsController {
  constructor(private readonly habitatsService: HabitatsService) {}

  @MessagePattern('createHabitat')
  create(@Payload() createHabitatDto: CreateHabitatDto) {
    return this.habitatsService.create(createHabitatDto);
  }

  @MessagePattern('findAllHabitats')
  findAll() {
    return this.habitatsService.findAll();
  }

  @MessagePattern('findOneHabitat')
  findOne(@Payload() id: number) {
    return this.habitatsService.findOne(id);
  }

  @MessagePattern('updateHabitat')
  update(@Payload() updateHabitatDto: UpdateHabitatDto) {
    return this.habitatsService.update(updateHabitatDto.id, updateHabitatDto);
  }

  @MessagePattern('removeHabitat')
  remove(@Payload() id: number) {
    return this.habitatsService.remove(id);
  }
}
