import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from '../entities/persona.entity';
import { Repository } from 'typeorm';
import { CreatePersonaDto } from 'src/dto/persona-create.dto';
import { UpdatePersonaDto } from 'src/dto/update-persona.dto';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  //crear persona
  async crearPersona(CreatePersonaDto: CreatePersonaDto) {
    try {
      const personaC = this.personaRepository.create(CreatePersonaDto);
      await this.personaRepository.save(personaC);
      return personaC;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!');
    }
  }
  //funcion para buscar por id
  async findOne(id: number): Promise<Persona> {
    return await this.personaRepository.findOneBy({id});
  }
  //eliminar por id
  async delete(id: number): Promise<boolean> {
    const result = await this.personaRepository.delete(id);
    return result.affected > 0;
  }

  //funcion update
  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    const personaup = await this.personaRepository.findOneBy({id});
  
    if (!personaup) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
  
    const updatePersona = Object.assign(personaup, updatePersonaDto);

    return await this.personaRepository.save(updatePersona);
  }


}
