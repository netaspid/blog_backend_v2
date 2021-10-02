import { MongooseModule, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts, PostSchema } from './schemas/post.schema';


@Module({
    providers: [PostsService],
    controllers: [PostsController],
    imports: [
        MongooseModule.forFeature([
            {name: Posts.name, schema: PostSchema}
        ])
    ],
})

export class PostsModule {
}