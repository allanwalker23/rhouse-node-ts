import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatUsuario1601469847641
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuario',
        columns: [
          {
            name: 'id',
            type: 'int',
            isUnique:true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome_completo',
            type: 'varchar(100)',
          },
          {
            name: 'nome_usuario',
            type: 'varchar(50)',
          },
          {
            name: 'email',
            type: 'varchar(50)',
          },
          {
            name: 'senha',
            type: 'varchar(50)',
          },
          {
            name: 'telefone',
            type: 'varchar(30)',
          },
          {
            name:'cpf',
            type:'varchar(30)',
            isNullable:true
          },
          {
            name:'cep',
            type:'varchar(30)',
            isNullable:true
          },
          {
            name:'bairro',
            type:'varchar(100)',
            isNullable:true
          },
          {
            name:'logradouro',
            type:'varchar(100)',
            isNullable:true
          },
          {
            name:'complemento',
            type:'varchar(40)',
            isNullable:true
          },
          {
            name:'numero',
            type:'int',
            isNullable:true
          },
          {
            name:'sobre_voce',
            type:'varchar(301)',
            isNullable:true
          },
          {
            name:'url_perfil',
            type:'varchar(300)',
            isNullable:true
          },
          {
            name:'tipo_usuario',
            type:'int'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuario');
  }
}
