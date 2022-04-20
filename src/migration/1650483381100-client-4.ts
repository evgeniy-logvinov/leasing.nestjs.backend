import {MigrationInterface, QueryRunner} from "typeorm";

export class client41650483381100 implements MigrationInterface {
    name = 'client41650483381100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "PK_96da49381769303a6515a8785c7"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "PK_96da49381769303a6515a8785c7"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id")`);
    }

}
