import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import * as typeOrmConfig from './typeorm.config';
import { LeasingUserInfoModule } from './user-info/leasing-user-info.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    LeasingUserInfoModule,
    UserModule,
  ],
})
export class AppModule {}
