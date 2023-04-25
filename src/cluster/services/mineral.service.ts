import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Mineral } from '../entities/mineral.entity';

@Injectable()
export class MineralService {
  constructor(
    @InjectRepository(Mineral)
    private readonly mineralRepository: Repository<Mineral>,
  ) {}

  async findAll(): Promise<Mineral[]> {
    return this.mineralRepository.find();
  }
}
