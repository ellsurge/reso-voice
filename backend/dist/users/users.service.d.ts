import { Model } from 'mongoose';
import { User } from './user.schema';
import { CreateDto } from './user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(userData: CreateDto): Promise<User>;
    findById(userId: string): Promise<User>;
    findByMatnumber(matNumber: string): Promise<User>;
    findAll(): Promise<User[]>;
    exists(param: string): Promise<{
        matnumber: boolean;
        id: boolean;
    }>;
}
