import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCidade1622833150307 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'cidade',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'nome',
                  type: 'varchar(50)',
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
      await queryRunner.dropTable('cidade');
    }

}
