import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Users & Document

@Schema()
export class Users {

    @Prop()
    id: string
    @Prop()
    name: string
    @Prop()
    slug: string
    @Prop()
    ghost_auth_access_token: string
    @Prop()
    ghost_auth_id: string
    @Prop()
    password: string
    @Prop()
    email: string
    @Prop()
    profile_image: string
    @Prop()
    cover_image: string
    @Prop()
    bio: string
    @Prop()
    website: string
    @Prop()
    location: string
    @Prop()
    facebook: string
    @Prop()
    twitter: string
    @Prop()
    accessibility: string
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
    tour: string
    @Prop()
    last_seen: string
    @Prop()
    created_at: string
    @Prop()
    created_by: string
}

export const UserSchema = SchemaFactory.createForClass(Users)
