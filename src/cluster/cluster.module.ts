import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipioController } from './controller/municipio.controller';
import { MunicipioService } from './services/municipio.service';
import { Municipio } from './entities/municipio.entity';
import { HojaMineriaController } from './controller/hoja_mineria.controller';
import { HojaMineriaService } from './services/hoja_mineria.service';
import { Hoja_Mineral } from './entities/hoja_minera.entity';
import { MineralController } from './controller/mineral.controller';
import { MineralService } from './services/mineral.service';
import { Mineral } from './entities/mineral.entity';
import { OrigenMineralController } from './controller/origen_mineral.controller';
import { OrigenMineralService } from './services/origen_mineral.service';
import { OrigenMineral } from './entities/origen_mineral.entity';
import { PdfgenerateService } from './services/pdfgenerate.service';
import { PersonaController } from './controller/persona.controller';
import { PersonaService } from './services/persona.service';
import { Persona } from './entities/persona.entity';

@Module({
  controllers: [
    MunicipioController,
    HojaMineriaController,
    MineralController,
    OrigenMineralController,
    PersonaController,
  ],
  providers: [
    MunicipioService,
    HojaMineriaService,
    MineralService,
    OrigenMineralService,
    PdfgenerateService,
    PersonaService,
  ],
  imports: [
    TypeOrmModule.forFeature([
      Municipio,
      Hoja_Mineral,
      Mineral,
      OrigenMineral,
      Persona,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class ClusterModule {}
