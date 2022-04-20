import { MigrationInterface, QueryRunner } from 'typeorm';

export class client31650465188893 implements MigrationInterface {
  name = 'client31650465188893';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "client" ALTER COLUMN "description" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "client" ALTER COLUMN "description" SET NOT NULL`,
    );
  }
}
