// import { OrigenMineral } from '../../comercio_interno/entities/origen_mineral.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrigenMineral } from './origen_mineral.entity';

@Entity({ name: 'municipio', schema: 'transversal' })
export class Municipio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'municipio',
    type: 'text',
  })
  municipio: string;
  @Column({
    name: 'provincia ',
    type: 'text',
  })
  provincia: string;

  @Column({
    name: 'departamento',
    type: 'text',
  })
  departamento: string;

  @OneToMany(() => OrigenMineral, (origenMineral) => origenMineral.idMunicipio)
  origenMineral?: OrigenMineral;
}
