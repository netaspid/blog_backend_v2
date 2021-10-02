import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Users, UserSchema } from './schemas/user.schema';


@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [
        MongooseModule.forFeature([
            {name: Users.name, schema: UserSchema}
        ])
    ],
    exports: [UsersService]
})

export class UsersModule {
}