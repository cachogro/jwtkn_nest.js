import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mineral2 } from '../entities/mineral2.entity';
import { Repository } from 'typeorm';
import { Mineral2Service } from '../services/mineral2.service';
import { CreateMineral2Dto } from '../dto/mineral2-create.dto';

@Controller('mineral2')
export class Mineral2Controller {
  constructor(
    @InjectRepository(Mineral2)
    private readonly mineral2Repository: Repository<Mineral2>,
    private readonly mineral2Service: Mineral2Service,
  ) {}
  //crear mina
  @Post()
  async crearMina(@Body() createMinaDto: CreateMineral2Dto): Promise<Mineral2> {
    return this.mineral2Service.createMineral2(createMinaDto);
  }
  //mostra todo
  @Get()
  async findAll(): Promise<Mineral2[]> {
    return this.mineral2Repository.find();
  }
  //eliminar
  // @Delete(':id')
  // async deleteMineral(@Param('id') id: number): Promise<void> {
  //   await this.mineral2Service.deleteMineral2(id);
  // }

  @Delete(':id')
  async deleteMineral(@Param('id') id: number): Promise<{ message: string }> {
    const deleted = await this.mineral2Service.deleteMineral2(id);
    if (deleted) {
      return { message: `Registro con el id ${id} eliminado exitosamente` };
    } else {
      throw new NotFoundException(`Registro con id ${id} no encontrado`);
    }
  }
}
