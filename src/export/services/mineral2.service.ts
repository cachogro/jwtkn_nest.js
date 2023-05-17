import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mineral2 } from '../entities/mineral2.entity';
import { Repository } from 'typeorm';
import { CreateMineral2Dto } from '../dto/mineral2-create.dto';

@Injectable()
export class Mineral2Service {
  constructor(
    @InjectRepository(Mineral2)
    private readonly mineral2Repository: Repository<Mineral2>,
  ) {}
  //CREAR MINA
  async createMineral2(CreateMeralDto: CreateMineral2Dto) {
    try {
      const mineral2C = this.mineral2Repository.create(CreateMeralDto);
      await this.mineral2Repository.save(mineral2C);
      return mineral2C;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!');
    }
  }

  // //eliminar
  // async deleteMineral2(id: number): Promise<void> {
  //   await this.mineral2Repository.delete(id);
  // }


    //eliminar por id
    async deleteMineral2(id: number): Promise<boolean> {
      const result = await this.mineral2Repository.delete(id);
      return result.affected > 0;
    }

}
