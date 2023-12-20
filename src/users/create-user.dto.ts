import { IsAlpha, IsEmail, IsNotEmpty } from "class-validator"

export class CreateUsersDto {

    @IsEmail()
    @IsNotEmpty()
    email: string


    @IsNotEmpty()
    @IsAlpha()
    firstname: string
   
    lastname: string
    
    @IsNotEmpty()
    password: string
}