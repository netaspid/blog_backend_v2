import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'


@Module({
  // imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://netik2:300b798c4733de0$@cluster0.m2gd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  imports: [
    UsersModule,
    PostsModule,
    MongooseModule.forRoot('mongodb+srv://netik2:300b798c4733de0$@cluster0.m2gd3.mongodb.net/blogv2?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
