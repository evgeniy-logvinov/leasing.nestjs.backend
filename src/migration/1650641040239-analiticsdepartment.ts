import { MigrationInterface, QueryRunner } from 'typeorm';

export class analiticsdepartment1650641040239 implements MigrationInterface {
  name = 'analiticsdepartment1650641040239';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "analitics_department" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "headOfDepartment" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7c49daddf8a0fc22a0e090b8e1e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "analitics_department"`);
  }
}
