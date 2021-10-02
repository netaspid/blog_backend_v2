import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { Users } from './schemas/user.schema';


@Controller('users')
export class UsersController {
    constructor (private readonly usersService: UsersService){}

    @Get()
    getAll () {
        return this.usersService.getAll()
    }

    @Get(':id')
    getUser(@Param('id') param:string): Promise<Users> {
        let result = this.usersService.getUser(param)
        return result
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto ) {
        return this.usersService.createUser(createUserDto)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.usersService.deleteUser(id)
    }

    @Put(':id')
    updateUser(@Body() updatePostDto: UpdateUserDto, @Param('id') id: string) {
        return this.usersService.updateUser(updatePostDto, id)
    }


}
