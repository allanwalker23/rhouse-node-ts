import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export default class AddForeignKeyCidade1622833835562
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.addColumn(
        'propriedade',
        new TableColumn({
          name: 'cidade_id',
          type: 'int',
          isNullable: true,
        }),
      );
  
      await queryRunner.createForeignKey(
        'propriedade',
        new TableForeignKey({
          name: 'CidadeForeignKey',
          columnNames: ['cidade_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'cidade',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('propriedade', 'CidadeForeignKey');
  
      await queryRunner.dropColumn('propriedade', 'cidade_id');
  
    }
  }
  