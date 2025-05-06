import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BirdsService } from './birds.service';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';

@Controller()
export class BirdsController {
  constructor(private readonly birdsService: BirdsService) {}

  @MessagePattern('createBird')
  create(@Payload() createBirdDto: CreateBirdDto) {
    return this.birdsService.create(createBirdDto);
  }

  @MessagePattern('findAllBirds')
  findAll() {
    return this.birdsService.findAll();
  }

  @MessagePattern('findOneBird')
  findOne(@Payload() id: number) {
    return this.birdsService.findOne(id);
  }

  @MessagePattern('updateBird')
  update(@Payload() updateBirdDto: UpdateBirdDto) {
    return this.birdsService.update(updateBirdDto.id, updateBirdDto);
  }

  @MessagePattern('removeBird')
  remove(@Payload() id: number) {
    return this.birdsService.remove(id);
  }
}
