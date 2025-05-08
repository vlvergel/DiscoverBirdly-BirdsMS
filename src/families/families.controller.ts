import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FamiliesService } from './families.service';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';

@Controller()
export class FamiliesController {
  constructor(private readonly familiesService: FamiliesService) {}

  @MessagePattern('createFamily')
  create(@Payload() createFamilyDto: CreateFamilyDto) {
    return this.familiesService.create(createFamilyDto);
  }

  @MessagePattern('findAllFamilies')
  findAll() {
    return this.familiesService.findAll();
  }

  @MessagePattern('findOneFamily')
  findOne(@Payload() id: number) {
    return this.familiesService.findOne(id);
  }

  @MessagePattern('updateFamily')
  update(@Payload() updateFamilyDto: UpdateFamilyDto) {
    return this.familiesService.update(updateFamilyDto.id, updateFamilyDto);
  }

  @MessagePattern('removeFamily')
  remove(@Payload() id: number) {
    return this.familiesService.remove(id);
  }
}
