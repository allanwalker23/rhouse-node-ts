import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateNoticia1622836528521
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'noticia',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'titulo',
            type: 'varchar(100)',
          },
          {
            name: 'subtitulo',
            type: 'varchar(500)',
          },
          {
            name: 'conteudo',
            type: 'varchar(1000)',
          },
          {
            name: 'data',
            type: 'timestamp',
          },
          {
            name: 'url_foto',
            type: 'varchar(300)',
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
    await queryRunner.dropTable('noticia');
  }
}
