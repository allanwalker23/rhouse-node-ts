import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateLocal1601474273498 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'local',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'titulo',
            type: 'varchar(50)',
          },
          {
            name: 'descricao',
            type: 'varchar(301)',
          },
          {
            name: 'preco',
            type: 'double',
          },
          {
            name: 'qtd_quarto',
            type: 'int',
          },
          {
            name: 'qtd_banheiro',
            type: 'int',
          },
          {
            name: 'limite_pessoa',
            type: 'int',
          },
          {
            name: 'limite_garagem',
            type: 'int',
          },
          {
            name: 'espaco_m2',
            type: 'double',
          },
          {
            name: 'cep',
            type: 'varchar(50)',
          },
          {
            name: 'bairro',
            type: 'varchar(100)',
          },
          {
            name: 'complemento',
            type: 'varchar(100)',
          },
          {
            name: 'logradouro',
            type: 'varchar(100)',
          },
          {
            name: 'numero',
            type: 'int',
          },
          {
            name: 'visualizacoes',
            type: 'int',
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
    await queryRunner.dropTable('local');
  }
}
