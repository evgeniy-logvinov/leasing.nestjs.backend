import { MigrationInterface, QueryRunner } from 'typeorm';

export class salesdepartment1650654847412 implements MigrationInterface {
  name = 'salesdepartment1650654847412';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sales_department" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "headOfDepartment" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_70a5f9aed63b1ac6a6e8f722f57" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" ADD "analiticsDepartmentId" uuid`,
    );
    await queryRunner.query(`ALTER TABLE "region" ADD "regionId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "employee" ADD CONSTRAINT "FK_f89f38ae044afff0c6f48338ce5" FOREIGN KEY ("analiticsDepartmentId") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "region" ADD CONSTRAINT "FK_cb65449537268bed2e491f862ce" FOREIGN KEY ("regionId") REFERENCES "sales_department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "region" DROP CONSTRAINT "FK_cb65449537268bed2e491f862ce"`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" DROP CONSTRAINT "FK_f89f38ae044afff0c6f48338ce5"`,
    );
    await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "regionId"`);
    await queryRunner.query(
      `ALTER TABLE "employee" DROP COLUMN "analiticsDepartmentId"`,
    );
    await queryRunner.query(`DROP TABLE "sales_department"`);
    await queryRunner.query(`DROP TABLE "analitics_department"`);
  }
}
