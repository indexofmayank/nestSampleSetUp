import {Controller, Get} from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (userService: UserService) {}

    @Get()
    getUsers() {
        return 'hello inside users';
    }
}