import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export default class AddForeignKeyUsuarioLocal1626029490457
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.addColumn(
        'local',
        new TableColumn({
          name: 'id_usuario',
          type: 'int',
          isNullable: true,
        }),
      );
  
      await queryRunner.createForeignKey(
        'local',
        new TableForeignKey({
          name: 'UsuarioLocalForeignKey',
          columnNames: ['id_usuario'],
          referencedColumnNames: ['id'],
          referencedTableName: 'usuario',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );

     
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('local', 'UsuarioLocalForeignKey');
  
      await queryRunner.dropColumn('local', 'id_usuario');

     
  
     
    }
  }
  