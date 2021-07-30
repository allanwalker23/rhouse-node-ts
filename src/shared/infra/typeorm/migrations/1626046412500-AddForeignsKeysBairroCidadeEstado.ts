import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export default class AddForeignsKeysBairroCidadeEstado1626046412500
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      

      await queryRunner.addColumn(
        'local',
        new TableColumn({
          name: 'id_cidade',
          type: 'int',
          isNullable: true,
        }),
      );


      await queryRunner.addColumn(
        'cidade',
        new TableColumn({
          name: 'id_estado',
          type: 'int',
          isNullable: true,
        }),
      );

      await queryRunner.createForeignKey(
        'local',
        new TableForeignKey({
          name: 'CidadeLocalForeingKey',
          columnNames: ['id_cidade'],
          referencedColumnNames: ['id'],
          referencedTableName: 'cidade',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
  
      await queryRunner.createForeignKey(
        'cidade',
        new TableForeignKey({
          name: 'EstadoCidadeForeignKey',
          columnNames: ['id_estado'],
          referencedColumnNames: ['id'],
          referencedTableName: 'estado',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    

     
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
     
      await queryRunner.dropForeignKey('local', 'CidadeLocalForeignKey');
  
      await queryRunner.dropColumn('local', 'id_cidade');

      await queryRunner.dropForeignKey('cidade', 'EstadoCidadeForeignKey');
  
      await queryRunner.dropColumn('cidade', 'id_estado');

     
  
     
    }
  }
  