import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './entities/users.repository';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {

  constructor( private readonly usersRepository: UsersRepository ) { }
  
  async create(createUserInput: CreateUserInput) {
    return this.usersRepository.create( {
      ...createUserInput,
      password: await this.hashPassword( createUserInput.password )
    });
  }

  async findAll() {
    return this.usersRepository.find( {} );
  }

  async findOne(_id: string) {
    return this.usersRepository.findOne({ _id });
  }

  async update( _id: string, updateUserInput: UpdateUserInput ) {
    if ( updateUserInput.password ) {
      updateUserInput.password = await this.hashPassword( updateUserInput.password );
    }
     return this.usersRepository.findOneAndUpdate( { _id }, {
        $set: {
          ...updateUserInput,
        }
      } );
  }

  async remove(_id: string) {
    return this.usersRepository.findOneAndDelete({_id});
  }

  private async hashPassword(password: string) {
    return await bcrypt.hash( password, 10 );
  }
}
