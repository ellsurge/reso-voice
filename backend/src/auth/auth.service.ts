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
    async validateUser(matNumber:string, password:string): Promise<User>{
        console.log(password);
        
        const user = await this.userService.findByMatnumber(matNumber);
        console.log("compare",await user.comparePassword(password));
        if (user && await user.comparePassword(password)){
            console.log(user.comparePassword())
            return user;

        }else{
        return null;
        }
    }
    async validateUserById(userId: string): Promise<User>{
        return this.userService.findById(userId);
    }

    async generateToken(user: User):Promise<string>{
        const payload = {sub:user.matNumber};
        return this.jwtService.sign(payload);
    }
}
