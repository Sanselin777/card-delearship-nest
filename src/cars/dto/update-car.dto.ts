import { IsString, IsDecimal, IsNumberString, MinLength, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto {

    @IsUUID()
    @IsString()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    @MinLength(3)
    readonly model?: string;

    @IsNumberString()
    @IsOptional()
    readonly year?: number;

    @IsString()
    @IsOptional()
    readonly color?: string;

    @IsDecimal()
    @IsOptional()
    readonly price?: number;
}