import {MigrationInterface, QueryRunner} from "typeorm";

export class employees1650660369348 implements MigrationInterface {
    name = 'employees1650660369348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales_department" DROP CONSTRAINT "FK_ef2fe7181fedb1687214c6accdf"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_2afe04453d7406edfe24739aaa1"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_08eef51a489be4405b8f483f632"`);
        await queryRunner.query(`ALTER TABLE "analitics_department" DROP CONSTRAINT "FK_a6cc1c2d95f6e3f421ef949bc14"`);
        await queryRunner.query(`ALTER TABLE "sales_department" RENAME COLUMN "leasing_company_employees_id" TO "leasingCompanyEmployeesId"`);
        await queryRunner.query(`ALTER TABLE "analitics_department" RENAME COLUMN "leasing_company_employees_id" TO "leasingCompanyEmployeesId"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "region_id"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "analitics-department_id"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "regionsId" uuid`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "analiticsDepartmentId" uuid`);
        await queryRunner.query(`ALTER TABLE "sales_department" ADD CONSTRAINT "FK_97dabb04b96b3aa07bfb0a84058" FOREIGN KEY ("leasingCompanyEmployeesId") REFERENCES "leasing_company_employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_a300b54c6076e36ed1374779d07" FOREIGN KEY ("regionsId") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_f89f38ae044afff0c6f48338ce5" FOREIGN KEY ("analiticsDepartmentId") REFERENCES "analitics_department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "analitics_department" ADD CONSTRAINT "FK_7dbe558157e75cf7fe60f387d46" FOREIGN KEY ("leasingCompanyEmployeesId") REFERENCES "leasing_company_employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "analitics_department" DROP CONSTRAINT "FK_7dbe558157e75cf7fe60f387d46"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_f89f38ae044afff0c6f48338ce5"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_a300b54c6076e36ed1374779d07"`);
        await queryRunner.query(`ALTER TABLE "sales_department" DROP CONSTRAINT "FK_97dabb04b96b3aa07bfb0a84058"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "analiticsDepartmentId"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "regionsId"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "analitics-department_id" uuid`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "region_id" uuid`);
        await queryRunner.query(`ALTER TABLE "analitics_department" RENAME COLUMN "leasingCompanyEmployeesId" TO "leasing_company_employees_id"`);
        await queryRunner.query(`ALTER TABLE "sales_department" RENAME COLUMN "leasingCompanyEmployeesId" TO "leasing_company_employees_id"`);
        await queryRunner.query(`ALTER TABLE "analitics_department" ADD CONSTRAINT "FK_a6cc1c2d95f6e3f421ef949bc14" FOREIGN KEY ("leasing_company_employees_id") REFERENCES "leasing_company_employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_08eef51a489be4405b8f483f632" FOREIGN KEY ("analitics-department_id") REFERENCES "analitics_department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_2afe04453d7406edfe24739aaa1" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales_department" ADD CONSTRAINT "FK_ef2fe7181fedb1687214c6accdf" FOREIGN KEY ("leasing_company_employees_id") REFERENCES "leasing_company_employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}