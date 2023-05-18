import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mina } from '../entities/mina.entity';
import { Repository } from 'typeorm';
import { CreateMinaDto } from '../dto/mina-create.dto';
import { UpdateMinaDto } from '../dto/update-mina.dto';

@Injectable()
export class MinaService {
  findOne(id: number): Mina | PromiseLike<Mina> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Mina)
    private readonly minaRepository: Repository<Mina>,
  ) {}
  //CREAR MINA
  async createMina(CreateMinaDto: CreateMinaDto) {
    try {
      const minaC = this.minaRepository.create(CreateMinaDto);
      await this.minaRepository.save(minaC);
      return minaC;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!');
    }
  }

  //mostrar la relacion de uno a muchos la cual toma la relacion
  async findAllMinas(): Promise<Mina[]> {
    return this.minaRepository.find({ relations: ['minerales'] });
  }

  //eliminar
  async deleteMina(id: number): Promise<void> {
    await this.minaRepository.delete(id);
  }

  //funcion update
  async update(id: number, updatePersonaDto: UpdateMinaDto): Promise<Mina> {
    const minaup = await this.minaRepository.findOneBy({ id });
    if (!minaup) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    const updateMineral2 = Object.assign(minaup, updatePersonaDto);
    return await this.minaRepository.save(updateMineral2);
  }
}
