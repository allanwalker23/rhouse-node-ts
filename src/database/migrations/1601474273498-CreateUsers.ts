import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1601474273498 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'propriedade',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'titulo',
            type: 'varchar(50)',
          },
          {
            name: 'descricao',
            type: 'varchar(300)',
          },
          {
            name: 'preco_mensal',
            type: 'int',
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
            name: 'cep',
            type: 'varchar',
          },
          {
            name: 'rua',
            type: 'varchar',
          },
          {
            name: 'numero',
            type: 'varchar',
          },
          {
            name: 'complemento',
            type: 'varchar',
          },
          {
            name: 'bairro',
            type: 'varchar',
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
    await queryRunner.dropTable('propriedade');
  }
}
