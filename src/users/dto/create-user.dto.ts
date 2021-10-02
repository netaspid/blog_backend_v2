export class CreateUserDto {
    readonly id: string
    readonly name: string
    readonly slug: string
    readonly ghost_auth_access_token: string
    readonly ghost_auth_id: string
    readonly password: string
    readonly email: string
    readonly profile_image: string
    readonly cover_image: string
    readonly bio: string
    readonly website: string
    readonly location: string
    readonly facebook: string
    readonly twitter: string
    readonly accessibility: string
    readonly status: string
    readonly locale: string
    readonly visibility: string
    readonly meta_title: string
    readonly meta_description: string
    readonly tour: string
    readonly last_seen: string
    readonly created_at: string
    readonly created_by: string
}