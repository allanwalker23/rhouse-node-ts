import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export default class AddForeignKeyTipoLocal1622833816928
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.addColumn(
        'local',
        new TableColumn({
          name: 'tipo_local_id',
          type: 'int',
          isNullable: true,
        }),
      );
  
      await queryRunner.createForeignKey(
        'local',
        new TableForeignKey({
          name: 'TipoLocal_Local',
          columnNames: ['tipo_local_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'tipo_local',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('local', 'TipoLocal_Local');
  
      await queryRunner.dropColumn('local', 'tipo_local_id');
  
    }
  }
  