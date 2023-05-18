import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreatehojaMineriaDto {
  @IsNumber()
  id: number;

  @IsNumber()
  @IsOptional()
  idMineralMunicipio?: number;

  @IsString({ message: 'descripcion debe ser una cadena de caracteres.' })
  @IsOptional()
  descripcion?: string;

  @ApiProperty({
    example: 6.96,
    description: 'Cotizacion internacional del día',
  })
  @IsNumber({}, { message: 'regalia_minera no es de tipo entero.' })
  @IsPositive({ message: 'regalia_minera debe ser un número positivo' })
  @IsOptional()
  regalia_minera?: number;

  @IsNumber()
  @IsOptional()
  pesoBruto?: number;

  @IsNumber()
  @IsOptional()
  transaccion?: number;
}
