import { Body, Controller, Get, Param, Post, Put, ParseUUIDPipe } from '@nestjs/common';
import { Delete, Patch } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto'

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this.carsService.findById(id);
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto) {
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id);
    }


    /* We can use Pipes to transform the data that is coming from the request */
    /* We can use pipes in deferent levels of our app, but is there is something that we will use in all a*/


}
