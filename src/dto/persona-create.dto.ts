import { Transform } from 'class-transformer';
import { TransformFnParams } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreatePersonaDto {
  @IsNumber()
  id: number;

  @IsString({ message: 'nombre debe ser una cadena de caracteres.' })
  @IsOptional()
  @Transform((param) => param.value.toUpperCase())
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Transform((param) => param.value.toUpperCase())
  apellido: string;

  @IsOptional()
  fecha: Date;
}
