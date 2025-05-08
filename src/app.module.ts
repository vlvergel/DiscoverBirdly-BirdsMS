import { Module } from '@nestjs/common';
import { BirdsModule } from './birds/birds.module';
import { SpeciesModule } from './species/species.module';
import { FamiliesModule } from './families/families.module';
import { HabitatsModule } from './habitats/habitats.module';

@Module({
  imports: [BirdsModule, SpeciesModule, FamiliesModule, HabitatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
