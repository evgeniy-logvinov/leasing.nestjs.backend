import {MigrationInterface, QueryRunner} from "typeorm";

export class employees1650656409361 implements MigrationInterface {
    name = 'employees1650656409361'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "leasing_company_employees" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_dfa644892c49bc70bbf44e565a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sales_department" ADD "leasingCompanyEmployeesId" uuid`);
        await queryRunner.query(`ALTER TABLE "analitics_department" ADD "leasingCompanyEmployeesId" uuid`);
        await queryRunner.query(`ALTER TABLE "sales_department" ADD CONSTRAINT "FK_97dabb04b96b3aa07bfb0a84058" FOREIGN KEY ("leasingCompanyEmployeesId") REFERENCES "leasing_company_employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "analitics_department" ADD CONSTRAINT "FK_7dbe558157e75cf7fe60f387d46" FOREIGN KEY ("leasingCompanyEmployeesId") REFERENCES "leasing_company_employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "analitics_department" DROP CONSTRAINT "FK_7dbe558157e75cf7fe60f387d46"`);
        await queryRunner.query(`ALTER TABLE "sales_department" DROP CONSTRAINT "FK_97dabb04b96b3aa07bfb0a84058"`);
        await queryRunner.query(`ALTER TABLE "analitics_department" DROP COLUMN "leasingCompanyEmployeesId"`);
        await queryRunner.query(`ALTER TABLE "sales_department" DROP COLUMN "leasingCompanyEmployeesId"`);
        await queryRunner.query(`DROP TABLE "leasing_company_employees"`);
    }

}
