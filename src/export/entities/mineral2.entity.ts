import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Mina } from './mina.entity';

@Entity({ name: 'mineral', schema: 'exportacion' })
export class Mineral2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'id_mina',
    type: 'integer',
  })
  id_mina: number;

  @Column({
    name: 'descripcion',
    type: 'varchar',
  })
  descripcion: string;

  @Column({
    name: 'ley_mineral',
    type: 'numeric',
  })
  ley_mineral: number;

  @ManyToOne(() => Mina, (mina) => mina.minerales)
  @JoinColumn({ name: 'id_mina' })
  mina: Mina;

  // @OneToMany(() => OrigenMineral, (origenMineral) => origenMineral.mineral)
  // origenesMineral: OrigenMineral[];
}
