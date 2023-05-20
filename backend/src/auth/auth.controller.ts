import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LoginDto} from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService)
    {

    }
    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<{accessToken:String}>{
        const user = await this.authService.validateUser(loginDto.username, loginDto.password);
        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        const accessToken  = await this.authService.generateToken(user);
        return {accessToken};

    }

}
