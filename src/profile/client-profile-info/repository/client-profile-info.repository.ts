import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { AddressDto } from 'src/address/dto/address.dto';
import { Address } from 'src/address/entity/address.entity';
import { CityDictionary } from 'src/dictionaries/city-dictionary/entity/city-dictionary.entity';
import { OkvdDictionary } from 'src/dictionaries/okvd-dictionary/entity/okvd-dictionary.entity';
import { RegionDictionary } from 'src/dictionaries/region-dictionary/entity/region-dictionary.entity';
import { TaxationSystemDictionary } from 'src/dictionaries/taxation-system-dictionary/entity/taxation-system-dictionary.entity';
import { FioDto } from 'src/fio/dto/fio.dto';
import { Fio } from 'src/fio/entity/fio.entity';
import { FounderDto } from 'src/founder/dto/founder.dto';
import { Founder } from 'src/founder/entity/founder.entity';
import { GuarantorProfileInfoDto } from 'src/profile/guarantor-profile-info/dto/guarantor-profile-info.dto';
import { GuarantorProfileInfo } from 'src/profile/guarantor-profile-info/entity/guarantor-profile-info.entity';
import { Client } from 'src/user-info/client/entity/client.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProfileInfoDto } from '../dto/create-profile-info.dto';
import { ClientProfileInfo } from '../entity/client-profile-info.entity';

// TODO: check id if not exists create new one
// In this case it will create again and again new objects instead of rewrite one to one relation
// Return await save result
@EntityRepository(ClientProfileInfo)
export class ClientProfileInfoRepository extends Repository<ClientProfileInfo> {
  async createProfileInfo(
    profileInfo: CreateProfileInfoDto,
  ): Promise<{ message: string; id: string }> {
    const {
      id,
      inn,
      type,
      site,
      ogrn,
      kpp,
      fullName,
      shortName,
      actualAddress,
      actualSameWithLegal,
      legalAddress,
      postAddress,
      postSameWithLegal,
      postSameWithActual,
      email,
      generalManager,
      phone,
      taxationSystemId,
      mainActivityByOkvdId,
      actualActivityByOkvdIds,
      registrationDate,
      businessStartDate,
      businessStartSameWithRegistration,
      founders,
      guaranteeOfGD,
      guarantor,
      clientId,
    } = profileInfo;

    try {
      const client = await Client.findOneOrFail({
        where: { id: clientId },
      });

      // if (!client) {
      //   throw new NotFoundException('Client not found.');
      // }

      const clientProfile = await ClientProfileInfo.findOne({
        where: { id },
      });
      clientProfile.type = type;
      clientProfile.inn = inn;
      clientProfile.site = site;
      clientProfile.ogrn = ogrn;
      clientProfile.kpp = kpp;
      clientProfile.fullName = fullName;
      clientProfile.shortName = shortName;
      clientProfile.actualAddress = await this.createAddress(actualAddress);
      clientProfile.actualSameWithLegal = actualSameWithLegal;
      clientProfile.legalAddress = await this.createAddress(legalAddress);
      clientProfile.postAddress = await this.createAddress(postAddress);
      clientProfile.postSameWithLegal = postSameWithLegal;
      clientProfile.postSameWithActual = postSameWithActual;
      clientProfile.email = email;
      clientProfile.generalManager = await this.createFio(generalManager);
      clientProfile.phone = phone;
      clientProfile.client = client;

      const taxationSystem = await TaxationSystemDictionary.findOne({
        where: { id: taxationSystemId },
      });

      if (!taxationSystem) {
        throw new NotFoundException('Taxation system not found.');
      }

      clientProfile.taxationSystem = taxationSystem;

      const mainActivityByOkvd = await OkvdDictionary.findOne({
        where: { id: mainActivityByOkvdId },
      });

      if (!mainActivityByOkvd) {
        throw new NotFoundException('Main activity not found.');
      }

      const actualActivityByOkvd = await OkvdDictionary.findByIds(
        actualActivityByOkvdIds,
      );

      if (!actualActivityByOkvd.length) {
        throw new NotFoundException('Actual activity by okvd not found.');
      }

      clientProfile.actualActivityByOkvd = actualActivityByOkvd;
      clientProfile.registrationDate = new Date(registrationDate);
      clientProfile.businessStartDate = new Date(businessStartDate);
      clientProfile.businessStartSameWithRegistration =
        businessStartSameWithRegistration;
      const promises = [];
      founders.forEach((el) => promises.push(this.createFounder(el)));
      const newFounders = await promises;
      clientProfile.founders = newFounders;
      clientProfile.guaranteeOfGD = guaranteeOfGD;
      clientProfile.guarantor = await this.createGuarantor(guarantor);

      await clientProfile.save();

      return {
        message: 'Client profile successfully created !',
        id: clientProfile.id,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createAddress({
    id,
    cityId,
    regionId,
    index,
    building,
    corpus,
    district,
    house,
    litera,
    number,
    street,
  }: AddressDto): Promise<Address> {
    const actualAddressCity = await CityDictionary.findOneOrFail({
      where: { id: cityId },
    });

    // if (!actualAddressCity) {
    //   throw new NotFoundException('City not found.');
    // }

    const actualAddressRegion = await RegionDictionary.findOneOrFail({
      where: { id: regionId },
    });

    // if (!actualAddressRegion) {
    //   throw new NotFoundException('Region not found.');
    // }

    const newActualAddress = await Address.findOne({
      where: { id },
    });
    newActualAddress.index = index;
    newActualAddress.region = actualAddressRegion;
    newActualAddress.city = actualAddressCity;
    newActualAddress.district = district;
    newActualAddress.street = street;
    newActualAddress.house = house;
    newActualAddress.corpus = corpus;
    newActualAddress.building = building;
    newActualAddress.litera = litera;
    newActualAddress.number = number;
    await newActualAddress.save();

    return newActualAddress;
  }

  async createFio({
    firstName,
    secondName,
    patronymic,
    id,
  }: FioDto): Promise<Fio> {
    const newFio = await Fio.findOne({ where: { id } });
    newFio.firstName = firstName;
    newFio.secondName = secondName;
    newFio.patronymic = patronymic;
    await newFio.save();

    return newFio;
  }

  async createFounder({
    id,
    businessShare,
    inn,
    name,
    type,
  }: FounderDto): Promise<Founder> {
    const newFounder = await Founder.findOne({ where: { id } });
    newFounder.type = type;
    newFounder.inn = inn;
    newFounder.name = name;
    newFounder.businessShare = businessShare;

    await newFounder.save();

    return newFounder;
  }

  async createGuarantor(
    guarantor: GuarantorProfileInfoDto,
  ): Promise<GuarantorProfileInfo> {
    const {
      id,
      inn,
      site,
      ogrn,
      kpp,
      fullName,
      shortName,
      actualAddress,
      actualSameWithLegal,
      legalAddress,
      postAddress,
      postSameWithLegal,
      postSameWithActual,
      email,
      generalManager,
      phone,
      taxationSystemId,
      mainActivityByOkvdId,
      actualActivityByOkvdIds,
      registrationDate,
      businessStartDate,
      businessStartSameWithRegistration,
      founders,
    } = guarantor;

    try {
      const clientProfile = await GuarantorProfileInfo.findOne({
        where: { id },
      });
      clientProfile.inn = inn;
      clientProfile.site = site;
      clientProfile.ogrn = ogrn;
      clientProfile.kpp = kpp;
      clientProfile.fullName = fullName;
      clientProfile.shortName = shortName;
      clientProfile.actualAddress = await this.createAddress(actualAddress);
      clientProfile.actualSameWithLegal = actualSameWithLegal;
      clientProfile.legalAddress = await this.createAddress(legalAddress);
      clientProfile.postAddress = await this.createAddress(postAddress);
      clientProfile.postSameWithLegal = postSameWithLegal;
      clientProfile.postSameWithActual = postSameWithActual;
      clientProfile.email = email;
      clientProfile.generalManager = await this.createFio(generalManager);
      clientProfile.phone = phone;

      const taxationSystem = await TaxationSystemDictionary.findOneOrFail({
        where: { id: taxationSystemId },
      });

      // if (!taxationSystem) {
      //   throw new NotFoundException('Taxation system not found.');
      // }

      clientProfile.taxationSystem = taxationSystem;

      const mainActivityByOkvd = await OkvdDictionary.findOneOrFail({
        where: { id: mainActivityByOkvdId },
      });

      // if (!mainActivityByOkvd) {
      //   throw new NotFoundException('Main activity not found.');
      // }

      const actualActivityByOkvd = await OkvdDictionary.findByIds(
        actualActivityByOkvdIds,
      );

      if (!actualActivityByOkvd.length) {
        throw new NotFoundException('Actual activity by okvd not found.');
      }

      clientProfile.mainActivityByOkvd = mainActivityByOkvd;
      clientProfile.actualActivityByOkvd = actualActivityByOkvd;
      clientProfile.registrationDate = new Date(registrationDate);
      clientProfile.businessStartDate = new Date(businessStartDate);
      clientProfile.businessStartSameWithRegistration =
        businessStartSameWithRegistration;
      const promises = [];
      founders.forEach((el) => promises.push(this.createFounder(el)));
      const newFounders = await promises;
      clientProfile.founders = newFounders;

      await clientProfile.save();

      return clientProfile;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
