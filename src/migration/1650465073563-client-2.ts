import { MigrationInterface, QueryRunner } from 'typeorm';

export class client21650465073563 implements MigrationInterface {
  name = 'client21650465073563';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "client" ALTER COLUMN "blocked" SET DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "client" ALTER COLUMN "invited" SET DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "client" ALTER COLUMN "invited" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "client" ALTER COLUMN "blocked" DROP DEFAULT`,
    );
  }
}
