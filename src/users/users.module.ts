import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './entities/users.repository';
import { DatabaseModule } from 'src/common/database/database.module';
import {  User, UserSchema } from './entities/user.entity';
import { UsersResolver } from './users.resolver';

@Module( {
  imports: [
    DatabaseModule.forFeature( [
      { name: User.name, schema: UserSchema }
    ])
  ],
  controllers: [UsersController],
  providers: [UsersResolver, UsersService, UsersRepository],
  exports: [UsersService]
})
export class UsersModule {}
