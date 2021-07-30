import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export default class AddForeignKeyFotoLocal1625953843330
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.addColumn(
        'local',
        new TableColumn({
          name: 'foto_local_id',
          type: 'int',
          isNullable: true,
        }),
      );
  
      await queryRunner.createForeignKey(
        'local',
        new TableForeignKey({
          name: 'FotoLocalLocal',
          columnNames: ['foto_local_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'foto_local',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('local', 'FotoLocalLocal');
  
      await queryRunner.dropColumn('local', 'foto_local_id');
  
     
    }
  }
  