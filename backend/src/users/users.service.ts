import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { CreateDto } from './user.dto';
import { hash, hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>){}

    async create(userData :CreateDto): Promise <User>{
        const {password, ...rest} = userData;
        const hashedPassword = await hash(password, 10)
        const newUser = new this.userModel({...rest,password:hashedPassword});
        console.log("new user",newUser);
        return await newUser.save();
    }
    async findById(userId: string): Promise<User>{
        return await this.userModel.findById(userId).exec();
    }
    async findByMatnumber(mat: string ): Promise<User>{
        try{
            const user =  await this.userModel.findOne({matNumber:mat}).exec();
            return user;
        }
        catch(err){
            console.log( err)
        }

    }
    async findAll(): Promise<User[]>{
        return await this.userModel.find().exec();
    }



}
