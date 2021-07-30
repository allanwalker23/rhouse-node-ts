import Usuario from '@modules/users/infra/typeorm/entities/Usuario';
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
import BeneficioLocal from './BeneficioLocal';
import Cidade from './Cidade';
import FotoLocal from './FotoLocal';
import TipoCobranca from './TipoCobranca';
import TipoLocal from './TipoLocal';

  
  @Entity('local')
  class Local {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    titulo: string;
  
    @Column()
    descricao: string;

    @Column()
    limite_pessoa: number;

    @Column()
    limite_garagem: number;
  
    @Column()
    preco: number;

    @Column()
    espaco_m2: number;
  
    @Column()
    qtd_quarto: number;

    @Column()
    qtd_banheiro: number;

    @Column()
    cep: string;

    @Column()
    bairro: string;

    @Column()
    logradouro: string;

    @Column()
    complemento: string;

    @Column()
    numero: number;

    @Column()
    visualizacoes: number;
    
    @ManyToOne(() => Cidade, cidade => cidade.local, { eager: true })
    @JoinColumn({ name: 'id_cidade' })
    cidade:Cidade;

    @ManyToOne(() => TipoCobranca, tipo_cobranca => tipo_cobranca.local, { eager: true })
    @JoinColumn({ name: 'tipo_cobranca_id' })
    tipo_cobranca:TipoCobranca;


    @ManyToOne(() => FotoLocal, foto_local => foto_local.local, { eager: true })
    @JoinColumn({ name: 'foto_local_id' })
    foto_local:FotoLocal;

    @ManyToOne(() => TipoLocal, tipo_local => tipo_local.local, { eager: true })
    @JoinColumn({ name: 'tipo_local_id' })
    tipo_local:TipoLocal;

    @OneToMany(() => BeneficioLocal, beneficio_local => beneficio_local.local)
    beneficio_local: BeneficioLocal;

    @Column()
    tipo_local_id: number;

    @Column()
    id_cidade: number;

    @Column()
    tipo_cobranca_id: number;

    @Column()
    foto_local_id: number;

    @ManyToOne(() => Usuario, usuario => usuario.local, { eager: true })
    @JoinColumn({ name: 'id_usuario' })
    usuario:Usuario;
  
    @Column()
    id_usuario: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Local;
  