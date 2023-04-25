import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'persona', schema: 'transversal' })
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'text',
  })
  nombre: string;

  @Column({
    name: 'apellido',
    type: 'text',
  })
  apellido: string;

  @Column({
    name: 'fecha',
    type: 'date',
  })
  fecha: Date;
}
