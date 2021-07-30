import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddForeignKeyUsuarioCidade1626050298045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.addColumn(
        'usuario',
        new TableColumn({
          name: 'id_cidade',
          type: 'int',
          isNullable: true,
        }),
      );

      await queryRunner.createForeignKey(
        'usuario',
        new TableForeignKey({
          name: 'CidadeUsuarioForeingKey',
          columnNames: ['id_cidade'],
          referencedColumnNames: ['id'],
          referencedTableName: 'cidade',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('usuario', 'CidadeUsuarioForeingKey');
  
        await queryRunner.dropColumn('usuario', 'id_cidade');
    }

}
