import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationModule } from './application/application.module';
import { AuthModule } from './auth/auth.module';
import { BalanceModule } from './balance/balance.module';
import { ProfileModule } from './profile/profile.module';
import * as typeOrmConfig from './typeorm.config';
import { LeasingUserInfoModule } from './user-info/leasing-user-info.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    LeasingUserInfoModule,
    UserModule,
    BalanceModule,
    ApplicationModule,
    ProfileModule,
  ],
})
export class AppModule {}
