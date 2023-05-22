import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LoginDto} from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService)
    {

    }
    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<{accessToken:String}>{
        const user = await this.authService.validateUser(loginDto.matNumber, loginDto.password);
        console.log("login:",user)
        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        const accessToken  = await this.authService.generateToken(user);
        console.log("login success")
        return {accessToken};

    }

}
