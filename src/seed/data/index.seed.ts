import { Brand } from "src/brands/entities/brand.entity";
import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';


export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Mustang',
        year: 1969,
        color: 'red',
        price: 10000,
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Mustang',
        year: 1969,
        color: 'red',
        price: 10000,
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Mustang',
        year: 1969,
        color: 'red',
        price: 10000,
    },
];

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime(),
    },
];