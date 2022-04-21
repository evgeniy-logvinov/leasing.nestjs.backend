import { MigrationInterface, QueryRunner } from 'typeorm';

export class leasingCompany1650487527970 implements MigrationInterface {
  name = 'leasingCompany1650487527970';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."leasing_company_state_enum" AS ENUM('UNREG', 'REG')`,
    );
    await queryRunner.query(
      `CREATE TABLE "leasing_company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "inn" integer NOT NULL, "email" character varying NOT NULL, "state" "public"."leasing_company_state_enum" NOT NULL DEFAULT 'UNREG', "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "blocked" boolean NOT NULL DEFAULT false, "invited" boolean NOT NULL DEFAULT false, "accreditation" boolean NOT NULL DEFAULT false, "description" character varying, CONSTRAINT "UQ_fc7884412d9f0b71b3490682123" UNIQUE ("email"), CONSTRAINT "PK_fc9b2f87251999578900f50845a" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "leasing_company"`);
    await queryRunner.query(`DROP TYPE "public"."leasing_company_state_enum"`);
  }
}
