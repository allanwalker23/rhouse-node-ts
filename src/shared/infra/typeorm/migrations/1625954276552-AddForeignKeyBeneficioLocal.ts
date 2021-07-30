import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export default class AddForeignKeyBeneficioLocal1625954276552
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.addColumn(
        'beneficio_local',
        new TableColumn({
          name: 'id_local',
          type: 'int',
          isNullable: true,
        }),
      );

      await queryRunner.addColumn(
        'beneficio_local',
        new TableColumn({
          name: 'id_beneficio',
          type: 'int',
          isNullable: true,
        }),
      );
  
      await queryRunner.createForeignKey(
        'beneficio_local',
        new TableForeignKey({
          name: 'BeneficioForeignKey',
          columnNames: ['id_local'],
          referencedColumnNames: ['id'],
          referencedTableName: 'local',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );

      await queryRunner.createForeignKey(
        'beneficio_local',
        new TableForeignKey({
          name: 'LocalForeignKey',
          columnNames: ['id_beneficio'],
          referencedColumnNames: ['id'],
          referencedTableName: 'beneficio',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('beneficio_local', 'BeneficioForeignKey');
  
      await queryRunner.dropColumn('beneficio_local', 'id_local');

      await queryRunner.dropForeignKey('beneficio_local', 'LocalForeignKey');
  
      await queryRunner.dropColumn('beneficio_local', 'id_beneficio');
  
     
    }
  }
  