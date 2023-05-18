import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hoja_Mineral } from '../entities/hoja_minera.entity';
import { OrigenMineral } from '../entities/origen_mineral.entity';
import { CreatehojaMineriaDto } from '../../dto/hoja.mineria-create.dto';

@Injectable()
export class HojaMineriaService {
  getHlById(idHl: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Hoja_Mineral)
    private readonly hoja_mineraRepository: Repository<Hoja_Mineral>,
  ) {}

  async create(CreatehojaMineriaDto: CreatehojaMineriaDto) {
    try {
      const hoja = this.hoja_mineraRepository.create(CreatehojaMineriaDto);
      await this.hoja_mineraRepository.save(hoja);
      return hoja;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!');
    }
  }

  async findAll() {
    return this.hoja_mineraRepository.find({
      relations: { origenMineral: true },
    });
  }
}
