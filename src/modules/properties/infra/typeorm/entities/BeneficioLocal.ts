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
import Beneficio from './Beneficio';
import Local from './Local';

  
  @Entity('beneficio_local')
  class BeneficioLocal {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @ManyToOne(() => Local, local => local.beneficio_local, { eager: true })
    @JoinColumn({ name: 'id_local' })
    local:Local;

    @ManyToOne(() => Beneficio, beneficio => beneficio.beneficio_local, { eager: true })
    @JoinColumn({ name: 'id_beneficio' })
    beneficio:Beneficio;

    @Column()
    id_local: string;

    @Column()
    id_beneficio: string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default BeneficioLocal;
  