import { UsersService } from './users.service';
import { User } from './user.schema';
import { CreateDto } from './user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAllUsers(): Promise<User[]>;
    find(matNumber: string): Promise<User>;
    gets(id: string): Promise<User>;
    create(createUserDto: CreateDto): Promise<User>;
}
