import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export default class AddForeignKeyEstadoId1622833319799
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.addColumn(
        'cidade',
        new TableColumn({
          name: 'estado_id',
          type: 'int',
          isNullable: true,
        }),
      );
  
      await queryRunner.createForeignKey(
        'cidade',
        new TableForeignKey({
          name: 'CidadeEstado',
          columnNames: ['estado_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'estado',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('cidade', 'CidadeEstado');
  
      await queryRunner.dropColumn('cidade', 'estado_id');
  
     
    }
  }
  