import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from '../entities/persona.entity';
import { Repository } from 'typeorm';
import { PersonaService } from '../services/persona.service';
import { CreatePersonaDto } from 'src/dto/persona-create.dto';
import { UpdatePersonaDto } from 'src/dto/update-persona.dto';

@Controller('personas')
export class PersonaController {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    private readonly personaService: PersonaService,
  ) {}

  //lista todas las personas
  @Get()
  async findAll(): Promise<Persona[]> {
    return this.personaRepository.find();
  }
  //buscar por id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Persona> {
    return this.personaService.findOne(id);
  }

  //guardar nuevos usuarios
  @Post()
  async crearPersona(
    @Body() crearPersonaDto: CreatePersonaDto,
  ): Promise<Persona> {
    return this.personaService.crearPersona(crearPersonaDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    const deleted = await this.personaService.delete(id);
    if (deleted) {
      return { message: 'Registro eliminado exitosamente' };
    } else {
      throw new NotFoundException(`Registro con id ${id} no encontrado`);
    }
  }

  //update
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePersonaDto: UpdatePersonaDto,
  ): Promise<Persona> {
    return await this.personaService.update(id, updatePersonaDto);
  }
}
