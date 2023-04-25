import { Controller, Get } from '@nestjs/common';
import { MineralService } from '../services/mineral.service';
import { Mineral } from '../entities/mineral.entity';

@Controller('mineral')
export class MineralController {
  constructor(private mineralService: MineralService) {}

  @Get()
  async findAll(): Promise<Mineral[]> {
    return this.mineralService.findAll();
  }
}
