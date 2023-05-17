import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Mineral2 } from './mineral2.entity';


@Entity({ name: 'mina', schema: 'exportacion' })
export class Mina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre_mina',
    type: 'varchar',
  })
  nombre_mina: string;

  @Column({
    name: 'descripcion',
    type: 'varchar',
  })
  descripcion: string;

  @Column({
    name: 'fecha_registro',
    type: 'date',
  })
  fecha_registro: Date;


  @Column({
    name: 'estado',
    type: 'boolean',
  })
  tipo: boolean;

  @OneToMany(() => Mineral2, mineral => mineral.mina)
  minerales: Mineral2[];

  // @OneToMany(() => OrigenMineral, (origenMineral) => origenMineral.mineral)
  // origenesMineral: OrigenMineral[];
}
