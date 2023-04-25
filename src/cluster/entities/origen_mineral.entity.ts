import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Municipio } from './municipio.entity';
import { Mineral } from './mineral.entity';
import { Hoja_Mineral } from './hoja_minera.entity';

@Entity({
  name: 'origen_mineral',
  schema: 'transversal',
})
export class OrigenMineral {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    name: 'id_municipio',
    type: 'int8',
    nullable: true,
  })
  idMunicipio?: number;

  @Column({
    name: 'id_mineral',
    type: 'int8',
    nullable: true,
  })
  idMineral?: number;

  @ManyToOne(() => Municipio, (municipio) => municipio.origenMineral, {
    eager: true,
  })
  @JoinColumn({ name: 'id_municipio', referencedColumnName: 'id' })
  municipio: Municipio;

  @ManyToOne(() => Mineral, (mineral) => mineral.origenesMineral, {
    eager: true,
  })
  @JoinColumn({ name: 'id_mineral', referencedColumnName: 'id' })
  mineral: Mineral;

  @OneToOne(() => Hoja_Mineral, (hoja_Mineral) => hoja_Mineral.origenMineral)
  hoja_Mineral?: Hoja_Mineral;
}
