import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MinaController } from './controller/mina.controller';
import { Mineral2Controller } from './controller/mineral2.controller';
import { Mineral2Service } from './services/mineral2.service';
import { MinaService } from './services/mina.service';
import { Mina } from './entities/mina.entity';
import { Mineral2 } from './entities/mineral2.entity';

@Module({
  controllers: [MinaController, Mineral2Controller],
  providers: [Mineral2Service, MinaService],
  imports: [TypeOrmModule.forFeature([Mina,Mineral2])],
  exports: [TypeOrmModule],
})
export class ExportModule {}
