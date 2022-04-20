import { MigrationInterface, QueryRunner } from 'typeorm';

export class client1650377376195 implements MigrationInterface {
  name = 'client1650377376195';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."client_state_enum" AS ENUM('UNREG', 'REG')`,
    );
    await queryRunner.query(
      `CREATE TABLE "client" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "inn" integer NOT NULL, "email" character varying NOT NULL, "state" "public"."client_state_enum" NOT NULL DEFAULT 'UNREG', "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "blocked" boolean NOT NULL, "invited" boolean NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "isEmailConfirmed" boolean NOT NULL DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "isEmailConfirmed"`,
    );
    await queryRunner.query(`DROP TABLE "client"`);
    await queryRunner.query(`DROP TYPE "public"."client_state_enum"`);
  }
}
