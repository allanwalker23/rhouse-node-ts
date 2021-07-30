import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
import BeneficioLocal from './BeneficioLocal';

  
  @Entity('beneficio')
  class Beneficio {
    @PrimaryGeneratedColumn('increment')
    id: string;
  
    @Column()
    nome: string;

    @OneToMany(() => BeneficioLocal, beneficio_local => beneficio_local.beneficio)
    beneficio_local: BeneficioLocal;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Beneficio;
  