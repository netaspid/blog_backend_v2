import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';


@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [],
})

export class UsersModule {
}