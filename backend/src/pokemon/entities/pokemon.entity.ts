import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pokemons')
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;
}