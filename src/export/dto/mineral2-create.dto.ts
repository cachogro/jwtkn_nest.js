import { Transform } from 'class-transformer';
import { TransformFnParams } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  isNumber,
} from 'class-validator';

export class CreateMineral2Dto {
  // @IsNumber()
  // id: number;

  // @IsString({ message: 'nombre debe ser una cadena de caracteres.' })
  // @IsOptional()
  // @Transform((param) => param.value.toUpperCase())
  // nombre: string;

  // @IsString()
  // @IsNotEmpty()
  // @Transform((param) => param.value.toUpperCase())
  // apellido: string;

  // @IsOptional()
  // fecha: Date;

  @IsNumber()
  id: number;

  @IsNumber()
  @IsOptional()
  id_mina: number;

  @IsString()
  @IsOptional()
  descripcion: string;

  @IsNumber()
  @IsOptional()
  ley_mineral: number;

}
