import { Client } from 'src/user-info/client/entity/client.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { TypeDebtBurdenEnum } from 'src/utils/entities/TypeDebtBurdenEnum';
import { TypeOfCommitmentEnum } from 'src/utils/entities/TypeOfCommitmentEnum';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class DebtBurden extends LeasingBaseEntity {
  @Column({
    type: 'enum',
    enum: TypeOfCommitmentEnum,
  })
  typeOfCommitment: TypeOfCommitmentEnum;

  @Column({
    type: 'enum',
    enum: TypeDebtBurdenEnum,
  })
  typeDebtBurden: TypeDebtBurdenEnum;

  @Column()
  issueDate: Date;

  @Column()
  summ: number;

  @Column()
  maturityDate: Date;

  @Column()
  remainingMaturityDate: Date;

  @Column()
  averageMonthlyPayment: number;

  @Column()
  balanceAtLastReportingDate: number;

  @Column()
  balanceAsOfCurrentDate: number;

  @OneToOne(() => Client)
  @JoinColumn()
  client: Client;
}
