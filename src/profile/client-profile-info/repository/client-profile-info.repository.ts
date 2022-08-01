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
import { EntityRepository, Repository } from 'typeorm';
import { CreateProfileInfoDto } from '../dto/create-profile-info.dto';
import { ClientProfileInfo } from '../entity/client-profile-info.entity';

@EntityRepository(ClientProfileInfo)
export class ClientProfileInfoRepository extends Repository<ClientProfileInfo> {
  async createProfileInfo(
    profileInfo: CreateProfileInfoDto,
    clientProfile: ClientProfileInfo,
  ): Promise<{ message: string; id: string }> {
    const {
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
    } = profileInfo;

    try {
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

  async createAddress(address: AddressDto): Promise<Address> {
    const actualAddressCity = await CityDictionary.findOne({
      where: { id: address.cityId },
    });

    if (!actualAddressCity) {
      throw new NotFoundException('City not found.');
    }

    const actualAddressRegion = await RegionDictionary.findOne({
      where: { id: address.regionId },
    });

    if (!actualAddressRegion) {
      throw new NotFoundException('Region not found.');
    }

    const newActualAddress = Address.create();
    newActualAddress.index = address.index;
    newActualAddress.region = actualAddressRegion;
    newActualAddress.city = actualAddressCity;
    newActualAddress.district = address.district;
    newActualAddress.street = address.street;
    newActualAddress.house = address.house;
    newActualAddress.corpus = address.corpus;
    newActualAddress.building = address.building;
    newActualAddress.litera = address.litera;
    newActualAddress.number = address.number;
    await newActualAddress.save();

    return newActualAddress;
  }

  async createFio({ firstName, lastName, patronymic }: FioDto): Promise<Fio> {
    const newFio = Fio.create();
    newFio.firstName = firstName;
    newFio.lastName = lastName;
    newFio.patronymic = patronymic;
    await newFio.save();

    return newFio;
  }

  async createFounder(founder: FounderDto): Promise<Founder> {
    const newFounder = Founder.create();
    newFounder.type = founder.type;
    newFounder.inn = founder.inn;
    newFounder.name = founder.name;
    newFounder.businessShare = founder.businessShare;

    await newFounder.save();

    return newFounder;
  }

  async createGuarantor(
    guarantor: GuarantorProfileInfoDto,
  ): Promise<GuarantorProfileInfo> {
    const {
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
      const clientProfile = new GuarantorProfileInfo();
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

      await clientProfile.save();

      return clientProfile;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
