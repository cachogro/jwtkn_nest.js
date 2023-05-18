import { PartialType } from '@nestjs/mapped-types';
import { CreateMineral2Dto } from './mineral2-create.dto';


export class UpdateMineral2Dto extends PartialType(CreateMineral2Dto) {}
