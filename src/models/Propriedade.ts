import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
import Cidade from './Cidade';
  
  @Entity('propriedade')
  class Propriedade {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    titulo: string;
  
    @Column()
    descricao: string;
  
    @Column()
    preco_mensal: number;
  
    @Column()
    qtd_quarto: number;

    @Column()
    qtd_banheiro: number;

    @Column()
    cep: string;
  
    @Column()
    rua: string;

    @Column()
    numero: number;
  
    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    url_foto: string;

    @Column()
    tipo_propriedade_id: number;
    
    @ManyToOne(() => Cidade, cidade => cidade.propriedade, { eager: true })
    @JoinColumn({ name: 'cidade_id' })
    cidade:Cidade;

    @Column()
    cidade_id: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Propriedade;
  