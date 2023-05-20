import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.schema';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ){}
    async validateUser(username:string, password:string): Promise<User>{
        const user = await this.userService.findByUsername(username);
        if (User && user.comparePassword(password)){
            return user;

        }
        return null;
    }
    async validateUserById(userId: string): Promise<User>{
        return this.userService.findById(userId);
    }

    async generateToken(user: User):Promise<string>{
        const payload = {sub:user.id};
        return this.jwtService.sign(payload);
    }
}
