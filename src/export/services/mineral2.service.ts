import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mineral2 } from '../entities/mineral2.entity';
import { Repository } from 'typeorm';
import { CreateMineral2Dto } from '../dto/mineral2-create.dto';
import { UpdateMineral2Dto } from '../dto/update-mineral2.dto';

@Injectable()
export class Mineral2Service {
  constructor(
    @InjectRepository(Mineral2)
    private readonly mineral2Repository: Repository<Mineral2>,
  ) {}

  //funcion para buscar por id
  async findOne(id: number): Promise<Mineral2> {
    return await this.mineral2Repository.findOneBy({ id });
  }

  //CREAR MINA con mensaje de error
  async createMineral2(CreateMeralDto: CreateMineral2Dto) {
    try {
      const mineral2 = this.mineral2Repository.create(CreateMeralDto);
      await this.mineral2Repository.save(mineral2);
      return mineral2;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda revisar consola!');
    }
  }

  //eliminar por id con mensaja por consola en caso de error
  async deleteMineral2(id: number): Promise<boolean> {
    try {
      const result = await this.mineral2Repository.delete(id);
      return result.affected > 0;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda revisar consola!');
    }
  }

  //funcion update
  async update(
    id: number,
    updatePersonaDto: UpdateMineral2Dto,
  ): Promise<Mineral2> {
    const mineral2up = await this.mineral2Repository.findOneBy({ id });
    if (!mineral2up) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    const updateMineral2 = Object.assign(mineral2up, updatePersonaDto);
    return await this.mineral2Repository.save(updateMineral2);
  }
}
