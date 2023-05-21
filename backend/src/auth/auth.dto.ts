import {IsNotEmpty} from 'class-validator';

export class LoginDto{
    @IsNotEmpty()
    matNumber: string;
    @IsNotEmpty()
    password:string;
}

