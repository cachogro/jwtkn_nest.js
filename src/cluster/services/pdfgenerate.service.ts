import { Injectable } from '@nestjs/common';
import { join } from 'path';
const PDFDocument = require('pdfkit-table');
import * as QRCode from 'qrcode';
import { HojaMineriaService } from './hoja_mineria.service';

@Injectable()
export class PdfgenerateService {
  constructor(private readonly $hojaMineria: HojaMineriaService) {}

  async generarPDF(idHl: number): Promise<Buffer> {
    const HL = await this.$hojaMineria.getHlById(idHl);
    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        size: 'LETTER',
        layout: 'landscape',
        margin: 30,
        bufferPages: true,
        autoFirstPage: false,
      });

      doc.addPage();

      doc
        .lineCap('round')
        .moveTo(180, 236)
        .lineWidth(13)
        .opacity(0.3)
        .fillAndStroke('#979797', '#979797')
        .stroke();

      //constructor
      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => {
        const data = Buffer.concat(buffer);
        resolve(data);
      });
      doc.end();
    });
    return pdfBuffer;
  }
}
