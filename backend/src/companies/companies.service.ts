import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from './company.schema';
import { CreateDto, UpdateDto } from './company.dto';

@Injectable()
export class CompaniesService {
    constructor(
    @InjectModel('Company') private readonly companyModel: Model<Company>,
    ){}

    async create(companyData: CreateDto): Promise<Company>{
        const newCompany = new this.companyModel(companyData);
        return await newCompany.save();
    }

    async getAll():Promise <Company[]>{
        return await this.companyModel.find().exec();
    }

    async update(companyID:string, newData:UpdateDto): Promise<Company>{
        return await this.companyModel.findByIdAndUpdate(companyID, newData, {new:true}).exec();
    }
    async delete(companyId:string):Promise <Company>{
        return await this.companyModel.findByIdAndDelete(companyId);
    }
        
    
}
