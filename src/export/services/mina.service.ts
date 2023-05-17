import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mina } from '../entities/mina.entity';
import { Repository } from 'typeorm';
import { CreateMinaDto } from '../dto/mina-create.dto';

@Injectable()
export class MinaService {
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

  
}
