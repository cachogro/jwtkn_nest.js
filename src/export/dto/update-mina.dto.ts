import { PartialType } from '@nestjs/mapped-types';
import { CreateMinaDto } from './mina-create.dto';


export class UpdateMinaDto extends PartialType(CreateMinaDto) {}
