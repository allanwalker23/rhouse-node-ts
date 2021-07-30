import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
import Local from './Local';
  
  @Entity('tipo_cobranca')
  class TipoCobranca {
    @PrimaryGeneratedColumn('increment')
    id: string;
  
    @Column()
    nome: string;

    @OneToMany(() => Local, local => local.tipo_cobranca)
    local: Local;
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default TipoCobranca;
  