import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED, BRANDS_SEED } from './data/index.seed';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) { }
  populateDB() {
    this.carsService.fillCarsWithSeed(CARS_SEED)
    this.brandsService.fillBrandsWithSeed(BRANDS_SEED)
  }
}
