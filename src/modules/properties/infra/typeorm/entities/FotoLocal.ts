import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
import Local from './Local';
  
  @Entity('foto_local')
  class FotoLocal {
    @PrimaryGeneratedColumn('increment')
    id: string;
  
    @Column()
    nome_arquivo: string;

    @Column()
    url_foto: string;

    @OneToMany(() => Local, local => local.foto_local)
    local: Local;
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default FotoLocal;
  