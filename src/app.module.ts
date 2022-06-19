import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import * as typeOrmConfig from './typeorm.config';
import { LeasingBaseUserModule } from './leasing-base-user/leasing-base-user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    LeasingBaseUserModule,
  ],
})
export class AppModule {}
