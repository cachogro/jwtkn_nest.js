import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrigenMineral } from '../entities/origen_mineral.entity';
@Injectable()
export class OrigenMineralService {
  constructor(
    // @InjectRepository(Municipio)
    // private municipioRepository:Repository<Municipio>,
    // @InjectRepository(Mineral)
    // private mineralRepository:Repository<Mineral>,
    @InjectRepository(OrigenMineral)
    private readonly origenMineralRepository: Repository<OrigenMineral>,
  ) {}
  async findAll() {
    return this.origenMineralRepository.find({
      relations: { municipio: true, mineral: true },
    });
  }

  // async findAll():Promise<any[]>{
  //   const OrigenMineral = await this.origenMineralRepository.find({
  //     relations: ['municipio','mineral'],
  //   });
  //   const resultado = OrigenMineral.map((OrigenMineral) => ({
  //     id: OrigenMineral.id,
  //     municipio: OrigenMineral.municipio.municipio,
  //     mineral: OrigenMineral.mineral.simbolo,
  //   }));
  //   return resultado;
  // }
}
