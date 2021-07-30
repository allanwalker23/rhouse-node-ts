
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
import Estado from './Estado';
import Local from './Local';
import Usuario from '@modules/users/infra/typeorm/entities/Usuario';
  
  @Entity('cidade')
  class Cidade {
    @PrimaryGeneratedColumn('increment')
    id: string;
  
    @Column()
    nome: string;

    @ManyToOne(() => Estado, estado => estado.cidade, { eager: true })
    @JoinColumn({ name: 'id_estado' })
    estado:Estado;
    
    @Column()
    id_estado: string;

    @OneToMany(() => Local, local => local.cidade)
    local: Local;

    @OneToMany(() => Usuario, usuario => usuario.cidade)
    usuario: Usuario;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Cidade;
  