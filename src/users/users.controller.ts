import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';


@Controller('users')
export class UsersController {

    @Get()
    getAll () {
        return 'users'
    }

}
