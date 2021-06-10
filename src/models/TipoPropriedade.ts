import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('tipo_propriedade')
  class TipoPropriedade {
    @PrimaryGeneratedColumn('increment')
    id: string;
  
    @Column()
    nome: string;
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default TipoPropriedade;
  