import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cliente')
class Cliente {
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
  telefone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Cliente;
