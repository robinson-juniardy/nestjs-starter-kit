import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/schema/user.entity';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private UsersRepository: Repository<User>
    ){}

    findAll(): Promise<User[]> {
        return this.UsersRepository.find()
    }
    
    create(params: CreateUsersDto) {
        const user = this.UsersRepository.create(params)
        return this.UsersRepository.save(user)
    }
}
