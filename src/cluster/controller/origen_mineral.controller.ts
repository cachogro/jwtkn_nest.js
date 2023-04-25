import { Controller, Get } from '@nestjs/common';
import { OrigenMineralService } from '../services/origen_mineral.service';
import { OrigenMineral } from '../entities/origen_mineral.entity';

@Controller('Origen_Mineral')
export class OrigenMineralController {
  constructor(private origenMineralService: OrigenMineralService) {}
  @Get()
  async findAll(): Promise<OrigenMineral[]> {
    return this.origenMineralService.findAll();
  }
}
