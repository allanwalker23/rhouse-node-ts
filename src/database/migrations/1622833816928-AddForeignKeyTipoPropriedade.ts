import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export default class AddForeignKeyTipoPropriedade1622833816928
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.addColumn(
        'propriedade',
        new TableColumn({
          name: 'tipo_propriedade_id',
          type: 'int',
          isNullable: true,
        }),
      );
  
      await queryRunner.createForeignKey(
        'propriedade',
        new TableForeignKey({
          name: 'TipoPropriedadeForeignKey',
          columnNames: ['tipo_propriedade_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'tipo_propriedade',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('propriedade', 'TipoPropriedadeForeignKey');
  
      await queryRunner.dropColumn('propriedade', 'tipo_propriedade_id');
  
    }
  }
  