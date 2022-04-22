import { MigrationInterface, QueryRunner } from 'typeorm';

export class region1650640547876 implements MigrationInterface {
  name = 'region1650640547876';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "employee" DROP CONSTRAINT "FK_9ad20e4029f9458b6eed0b0c454"`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" RENAME COLUMN "departmentId" TO "regionId"`,
    );
    await queryRunner.query(
      `CREATE TABLE "region" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "headOfDepartment" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" ADD CONSTRAINT "FK_a052a8d9cd29184c9b63b66c5a5" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "employee" DROP CONSTRAINT "FK_a052a8d9cd29184c9b63b66c5a5"`,
    );
    await queryRunner.query(`DROP TABLE "region"`);
    await queryRunner.query(
      `ALTER TABLE "employee" RENAME COLUMN "regionId" TO "departmentId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" ADD CONSTRAINT "FK_9ad20e4029f9458b6eed0b0c454" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
