import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument, Users } from './schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class UsersService {

    constructor (@InjectModel(Users.name) private UserModel: Model<UserDocument>) {

    }

    async getAll(): Promise<Users[]> {
        let result = this.UserModel.find({}).sort({created_at: -1}).exec()
        return result
    }

    getUser(id: string) {
        let result = this.UserModel.findOne({_id: id}).exec()
        return result
    }

    getUserByName(name: string) {
        let result = this.UserModel.findOne({name: name}).exec()
        return result
    }

    createUser(userDto: CreateUserDto) {
        let result = this.UserModel.create(userDto)
        return result
    }

    deleteUser(id: string) {
        let result = this.UserModel.deleteOne({_id: id}).exec()
        return result
    }

    updateUser(userDto: CreateUserDto, id: string) {
        let result = this.UserModel.findByIdAndUpdate(id, userDto, {new: true})
        return result
    }
}