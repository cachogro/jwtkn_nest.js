import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Mina } from '../entities/mina.entity';
import { Repository } from 'typeorm';
import { MinaService } from '../services/mina.service';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMinaDto } from '../dto/mina-create.dto';
import { UpdateMinaDto } from '../dto/update-mina.dto';

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

  //buscar por id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Mina> {
    return this.minaService.findOne(id);
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
  //update
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateMinaDto: UpdateMinaDto,
  ): Promise<Mina> {
    return await this.minaService.update(id, updateMinaDto);
  }
}
