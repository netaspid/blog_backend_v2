import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { Public } from '../auth/check-auth.decorator';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';
import { Posts } from './schemas/post.schema';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {
    }

    @Public()
    @Get()
    getAll (): Promise<Posts[]> {
        let result = this.postsService.getAll()
        return result
    }
    @Public()
    @Get(':id')
    getPost(@Param('id') param:string): Promise<Posts> {
        let result = this.postsService.getPost(param)
        return result
    }

    @Post()
    createPost(@Body() createPostDto: CreatePostDto ) {
        return this.postsService.createPost(createPostDto)
    }

    @Delete(':id')
    deletePost(@Param('id') id: string){
        return this.postsService.deletePost(id)
    }

    @Put(':id')
    updatePost(@Body() updatePostDto: UpdatePostDto, @Param('id') id: string) {
        return this.postsService.updatePost(updatePostDto, id)
    }
}
