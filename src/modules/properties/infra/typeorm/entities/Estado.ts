import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
import Cidade from './Cidade';
  
  @Entity('estado')
  class Estado {
    @PrimaryGeneratedColumn('increment')
    id: string;
  
    @Column()
    nome: string;

    @OneToMany(() => Cidade, cidade => cidade.estado)
    cidade: Cidade;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Estado;
  