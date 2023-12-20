import { Controller, Get, Put, Post, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/schema/user.entity';
import { CreateUsersDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("")
  getAllUsers(): Promise<User[]>{
    return this.usersService.findAll()
  }

  @Post("")
  createUsers(@Body() params: CreateUsersDto) {
    return this.usersService.create(params)
  } 

}
