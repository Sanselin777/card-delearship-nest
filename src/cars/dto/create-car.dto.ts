import { IsString, IsDecimal, IsNumberString, MinLength } from "class-validator";

export class CreateCarDto {
    @IsString()
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;

    @IsNumberString()
    readonly year: number;

    @IsString()
    readonly color: string;

    @IsDecimal()
    readonly price: number;
}