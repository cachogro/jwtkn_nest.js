import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipio } from '../entities/municipio.entity';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectRepository(Municipio)
    private readonly municipioRepository: Repository<Municipio>,
  ) {}

  async findAll(): Promise<Municipio[]> {
    return this.municipioRepository.find();
  }

  //    async findOne(id: number): Promise<Municipio> {
  //     return this.municipioRepository.findOne(id);
  //   }
}
