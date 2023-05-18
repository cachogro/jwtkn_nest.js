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
