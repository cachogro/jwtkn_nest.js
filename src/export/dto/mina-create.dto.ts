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
} from 'class-validator';

export class CreateMinaDto {
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

  @IsString()
  @IsOptional()
  nombre_mina: string;

  @IsString()
  @IsOptional()
  descripcion: string;

  @IsDate()
  @IsOptional()
  fecha_registro: Date;

  
  @IsOptional()
  tipo: boolean;
}
