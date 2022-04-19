import { MigrationInterface, QueryRunner } from 'typeorm';

export class userNameToEmail1650374650639 implements MigrationInterface {
  name = 'userNameToEmail1650374650639';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "username" TO "email"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" RENAME CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" TO "UQ_e12875dfb3b1d92d7d7c5377e22"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_info" ALTER COLUMN "address" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_info" ALTER COLUMN "address" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" RENAME CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" TO "UQ_78a916df40e02a9deb1c4b75edb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "email" TO "username"`,
    );
  }
}
