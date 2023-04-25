import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrigenMineral } from './origen_mineral.entity';

@Entity({ name: 'mineral', schema: 'transversal' })
export class Mineral {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'descripcion',
    type: 'varchar',
  })
  descripcion: string;

  @Column({
    name: 'simbolo',
    type: 'varchar',
  })
  simbolo: string;

  @Column({
    name: 'unidad_cotizacion',
    type: 'varchar',
  })
  undadCotizacion: string;

  @Column({
    name: 'tipo',
    type: 'varchar',
  })
  tipo: string;

  @OneToMany(() => OrigenMineral, (origenMineral) => origenMineral.mineral)
  origenesMineral: OrigenMineral[];
}
