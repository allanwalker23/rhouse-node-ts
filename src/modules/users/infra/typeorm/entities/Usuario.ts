import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import Cidade from '@modules/properties/infra/typeorm/entities/Cidade';
import Local from '@modules/properties/infra/typeorm/entities/Local';

@Entity('usuario')
class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  nome_completo: string;

  @Column()
  nome_usuario: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  cpf: string;

  @Column()
  cep: string;

  @Column()
  telefone: string;

  @ManyToOne(() => Cidade, cidade => cidade.usuario, { eager: true })
  @JoinColumn({ name: 'id_cidade' })
  cidade:Cidade;

  @Column()
  id_cidade: number;

  @Column()
  bairro: string;

  @Column()
  complemento:string;

  @Column()
  logradouro:string;

  @Column()
  numero:number;

  @Column()
  url_perfil: string;

  @Column()
  sobre_voce: string;

  @Column()
  tipo_usuario: number;

  @OneToMany(() => Local, local => local.usuario)
  local: Local;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Usuario;
