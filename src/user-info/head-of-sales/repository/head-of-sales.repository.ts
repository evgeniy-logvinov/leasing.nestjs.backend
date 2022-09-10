import { Fio } from 'src/fio/entity/fio.entity';
import { User } from 'src/user/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { HeadOfSalesDto } from '../dto/head-of-sales.dto';
import { HeadOfSales } from '../entity/head-of-sales.entity';

@EntityRepository(HeadOfSales)
export class HeadOfSalesRepository extends Repository<HeadOfSales> {
  async createHeadOfSales(
    headOfSalesDto: HeadOfSalesDto,
  ): Promise<HeadOfSales> {
    const {
      email,
      fio: { firstName, secondName, patronymic },
      mobilePhone,
      phone,
    } = headOfSalesDto;
    const user = User.create();
    user.email = email;
    await user.save();

    const fio = Fio.create();
    fio.firstName = firstName;
    fio.secondName = secondName;
    fio.patronymic = patronymic;
    // TODO: check save
    await fio.save();

    const head = HeadOfSales.create();
    head.fio = fio;
    head.mobilePhone = mobilePhone;
    head.phone = phone;
    await head.save();

    return head;
  }

  // getAll(): Promise<ClientPayload[]> {
  //   return this.createQueryBuilder('client')
  //     .leftJoinAndSelect('client.user', 'user')
  //     .select(['email', 'client.*'])
  //     .getRawMany();
  // }

  // getById(id: string): Promise<ClientPayload> {
  //   return this.createQueryBuilder('client')
  //     .leftJoinAndSelect('client.user', 'user')
  //     .select(['email', 'client.*'])
  //     .where('client.id = :id', { id })
  //     .getRawOne();
  // }
}
