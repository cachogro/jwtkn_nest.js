import { Controller, Get, Param } from '@nestjs/common';
import { Municipio } from '../entities/municipio.entity';
import { MunicipioService } from '../services/municipio.service';

@Controller('municipio')
export class MunicipioController {
  constructor(private municipioService: MunicipioService) {}

  @Get()
  async findAll(): Promise<Municipio[]> {
    return this.municipioService.findAll();
  }

  //   @Get(':id')
  //   async findOne(@Param('id') id: number): Promise<Municipio> {
  //     return this.municipioService.findOne(id);
  //   }
}
