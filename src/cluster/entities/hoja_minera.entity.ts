import { OrigenMineral } from './origen_mineral.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'hoja_mineria', schema: 'transversal' })
export class Hoja_Mineral {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'id_nim_mun',
    type: 'int8',
    nullable: true,
  })
  idMineralMunicipio?: number;

  @Column({
    name: 'descripcion',
    type: 'int8',
    nullable: true,
  })
  descripcion?: string;

  @Column({
    name: 'regalia_minera',
    type: 'int8',
    nullable: true,
  })
  regalia_minera?: number;

  @Column({
    name: 'peso_bruto',
    type: 'int8',
    nullable: true,
  })
  pesoBruto?: number;

  @Column({
    name: 'nro_transaccion',
    type: 'int8',
    nullable: true,
  })
  transaccion?: number;

  @OneToOne(
    () => OrigenMineral,
    (origenMineral) => origenMineral.hoja_Mineral,
    { eager: true },
  )
  @JoinColumn({ name: 'id_nim_mun', referencedColumnName: 'id' })
  origenMineral: OrigenMineral;
}
