import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { CreateDto } from './user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>){}

    async create(userData :CreateDto): Promise <User>{
        const newUser = new this.userModel(userData);
        return await newUser.save();
    }
    async findById(userId: string): Promise<User>{
        return await this.userModel.findById(userId).exec();
    }
    async findByMatnumber(matNumber: string ): Promise<User>{
        return await this.userModel.findOne({matNumber}).exec();
    }
    async findAll(): Promise<User[]>{
        return await this.userModel.find().exec();
    }
    async exists(param: string){
        const matNumber = (this.findByMatnumber(param))?true:false;
        const id = this.findById(param)?true:false;
        return {
            matnumber: matNumber,
            id: id,
        }
    }


}
