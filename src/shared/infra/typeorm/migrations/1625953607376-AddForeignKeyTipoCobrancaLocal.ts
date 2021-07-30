import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export default class AddForeignKeyLocalizacaoId1625953607376
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.addColumn(
        'local',
        new TableColumn({
          name: 'tipo_cobranca_id',
          type: 'int',
          isNullable: true,
        }),
      );
  
      await queryRunner.createForeignKey(
        'local',
        new TableForeignKey({
          name: 'TipoCobrancaLocalLocal',
          columnNames: ['tipo_cobranca_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'tipo_cobranca',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('local', 'TipoCobrancaLocalLocal');
  
      await queryRunner.dropColumn('local', 'tipo_cobranca_id');
  
     
    }
  }
  