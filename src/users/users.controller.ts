import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('_id') _id: string) {
    return this.usersService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('_id') _id: string, @Body() updateUserInput: UpdateUserInput) {
    return this.usersService.update(_id, updateUserInput);
  }

  @Delete(':id')
  remove(@Param('_id') _id: string) {
    return this.usersService.remove(_id);
  }
}
