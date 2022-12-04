import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {

    private users: User[] = [
        {
            id: uuidv4(),
            name: 'Alexandre',
            age: 28
        },
        {
            id: uuidv4(),
            name: 'Alessandra',
            age: 25
        },
        {
            id: uuidv4(),
            name: 'Alessandra',
            age: 30
        },
        {
            id: uuidv4(),
            name: 'Alexandre',
            age: 20
        },
        {
            id: uuidv4(),
            name: 'Virginia',
            age: 15
        },
        {
            id: uuidv4(),
            name: 'Marcos',
            age: 25
        },
        {
            id: uuidv4(),
            name: 'João',
            age: 40
        }
       
    ]

    getUsers(name?: string): User[] {
        if (name) {
            return this.users.filter((user) => user.name === name)
        }
        return this.users
    }

    getUsersById(userId: string): User {
        return this.users.find((user) => user.id === userId)
    }

    createUser(createUserDto: CreateUserDto): User {
        const newUser = {id: uuidv4(), ...createUserDto}
        this.users.push(newUser)

        return newUser
    }
}
