import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from './persona-create.dto';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {}
