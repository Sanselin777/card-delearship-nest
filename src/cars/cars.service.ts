import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        /*  {
             id: uuid(),
             brand: 'Ford',
             model: 'Mustang',
             year: 1969,
             color: 'red',
             price: 10000,
         }, */
    ]

    findAll() {
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

    create(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let carDb = this.findById(id);

        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new NotFoundException(`Car id is not valid`);
        }

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDb = { ...carDb, ...updateCarDto, id }
                return carDb;
            }
            return car;
        }
        )
        return carDb;
    }

    delete(id: string) {
        this.findById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        return 'Car deleted';
    }

    fillCarsWithSeed(cars: Car[]) {
        this.cars = cars;
    }
}
