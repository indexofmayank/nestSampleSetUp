import {UserService} from './users.service';
import {UsersController} from './users.contollers';
import { Module } from '@nestjs/common';

@Module({
    controllers: [UsersController],
    providers: [UserService]
})

export class UsersModule{}