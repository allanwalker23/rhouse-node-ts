import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('noticia')
  class Noticia {
    @PrimaryGeneratedColumn('increment')
    id: string;
  
    @Column()
    titulo: string;

    @Column()
    subtitulo: string;

    @Column()
    conteudo: string;

    @CreateDateColumn()
    data: Date;

    @Column()
    url_foto: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Noticia;
  