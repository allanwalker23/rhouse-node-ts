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
import Propriedade from './Propriedade';
  
  @Entity('cidade')
  class Cidade {
    @PrimaryGeneratedColumn('increment')
    id: string;
  
    @Column()
    nome: string;

    @ManyToOne(() => Estado, estado => estado.cidade, { eager: true })
    @JoinColumn({ name: 'estado_id' })
    estado:Estado;
    
    @Column()
    estado_id: string;

    @Column()
    url_foto: string;

    @OneToMany(() => Propriedade, propriedade => propriedade.cidade)
    propriedade: Propriedade;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Cidade;
  