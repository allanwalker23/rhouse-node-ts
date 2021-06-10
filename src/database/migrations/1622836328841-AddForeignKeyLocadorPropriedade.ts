import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export default class AddForeignKeyLocadorPropriedade1622836328841
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.addColumn(
        'propriedade',
        new TableColumn({
          name: 'locador_id',
          type: 'int',
          isNullable: true,
        }),
      );
  
      await queryRunner.createForeignKey(
        'propriedade',
        new TableForeignKey({
          name: 'LocadorForeignKey',
          columnNames: ['locador_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'locador',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('propriedade', 'LocadorForeignKey');
  
      await queryRunner.dropColumn('propriedade', 'locador_id');
  
    }
  }
  