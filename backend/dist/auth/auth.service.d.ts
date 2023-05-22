import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.schema';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(matNumber: string, password: string): Promise<User>;
    validateUserById(userId: string): Promise<User>;
    generateToken(user: User): Promise<string>;
}
