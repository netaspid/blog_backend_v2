import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Posts & Document

@Schema()
export class Posts {

    @Prop()
    id: string

    @Prop()
    uuid: string

    @Prop()
    title: string

    @Prop()
    slug: string

    @Prop()
    mobiledoc: string

    @Prop()
    html: string

    @Prop()
    amp: string

    @Prop()
    plaintext: string

    @Prop()
    feature_image: string

    @Prop()
    featured: string

    @Prop()
    page: string

    @Prop()
    status: string

    @Prop()
    locale: string

    @Prop()
    visibility: string

    @Prop()
    meta_title: string

    @Prop()
    meta_description: string

    @Prop()
    author_id: string

    @Prop()
    created_at: string

    @Prop()
    created_by: string

    @Prop()
    updated_at: string

    @Prop()
    updated_by: string

    @Prop()
    published_at: string

    @Prop()
    published_by: string

    @Prop()
    custom_excerpt: string

}

export const PostSchema = SchemaFactory.createForClass(Posts)
