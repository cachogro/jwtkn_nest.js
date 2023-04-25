import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { HojaMineriaService } from '../services/hoja_mineria.service';
import { Hoja_Mineral } from '../entities/hoja_minera.entity';
import { Body, Param, Post, Res } from '@nestjs/common/decorators';
import { CreatehojaMineriaDto } from '../../dto/hoja.mineria-create.dto';
import { PdfgenerateService } from '../services/pdfgenerate.service';

@Controller('hoja-mineria')
export class HojaMineriaController {
  constructor(
    private hojaMineriaService: HojaMineriaService,
    private readonly $kitPdf: PdfgenerateService,
  ) {}

  @Get()
  async findAll(): Promise<Hoja_Mineral[]> {
    return this.hojaMineriaService.findAll();
  }

  @Post()
  create(@Body() createhojaMineriaDto: CreatehojaMineriaDto) {
    return this.hojaMineriaService.create(createhojaMineriaDto);
  }

  @Get('pdf/:idHl')
  public async findPdfHl(
    @Param('idHl', ParseIntPipe) idHl: number,
    @Res() res,
  ) {
    const buffer = await this.$kitPdf.generarPDF(idHl);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=HL_senarecom.pdf',
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }
}
