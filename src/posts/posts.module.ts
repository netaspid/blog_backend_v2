import { MongooseModule, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts, PostSchema } from './schemas/post.schema';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


@Module({
    providers: [
        PostsService,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard
        }
    ],
    controllers: [PostsController],
    imports: [
        MongooseModule.forFeature([
            {name: Posts.name, schema: PostSchema}
        ])
    ],
})

export class PostsModule {
}