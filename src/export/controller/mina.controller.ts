import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Mina } from '../entities/mina.entity';
import { Repository } from 'typeorm';
import { MinaService } from '../services/mina.service';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMinaDto } from '../dto/mina-create.dto';

@Controller('mina')
export class MinaController {
  constructor(
    @InjectRepository(Mina)
    private readonly minaRepository: Repository<Mina>,
    private readonly minaService: MinaService,
  ) {}

  //mostra todo mas las relaciones

  @Get()
  async findAllMinas(): Promise<Mina[]> {
    return this.minaService.findAllMinas();
  }

  //crear mina
  @Post()
  async crearMina(@Body() createMinaDto: CreateMinaDto): Promise<Mina> {
    return this.minaService.createMina(createMinaDto);
  }

  //eliminar
  @Delete(':id')
  async deleteMina(@Param('id') id: number): Promise<void> {
    await this.minaService.deleteMina(id);
  }
}
