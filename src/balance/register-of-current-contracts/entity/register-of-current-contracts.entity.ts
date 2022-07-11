import { LeasingBaseEntity } from 'src/utils/entities';
import { TypeDebtBurdenEnum } from 'src/utils/entities/TypeDebtBurdenEnum';
import { TypeOfCommitmentEnum } from 'src/utils/entities/TypeOfCommitmentEnum';
import { Column, Entity } from 'typeorm';

@Entity()
export class RegisterOfCurrentContracts extends LeasingBaseEntity {
  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  summOfAgreement: number;

  @Column()
  scopeOfWorkPerformed: number;

  @Column()
  amountOfPaidWork: number;
}
