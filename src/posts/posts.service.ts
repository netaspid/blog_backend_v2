import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Posts, PostDocument } from './schemas/post.schema';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
    constructor (@InjectModel(Posts.name) private PostModel: Model<PostDocument>) {

    }

    async getAll(): Promise<Posts[]> {
        let result = this.PostModel.find({}).sort({created_at: -1}).exec()
        return result
    }

    getPost(id: string) {
        let result = this.PostModel.findOne({id: id}).exec()
        return result
    }

    createPost(postsDto: CreatePostDto) {
        let result = this.PostModel.create(postsDto)
        return result
    }

    deletePost(id: string) {
        let result = this.PostModel.deleteOne({_id: id}).exec()
        return result
    }

    updatePost(postDto: UpdatePostDto, id: string) {
        let result = this.PostModel.findByIdAndUpdate(id, postDto, {new: true})
        return result
    }


}