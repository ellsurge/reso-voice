import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Complaint } from './complaint.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDto } from './complaint.dto';

@Injectable()
export class ComplaintsService {
    constructor(
        @InjectModel('Complaint') private readonly complaintModel: Model<Complaint>
    ){}

    
    async create(complaintData:CreateDto): Promise<Complaint>{
        const newComplaint= new this.complaintModel(complaintData);
        return await newComplaint.save();
    }
    async  getLatest():Promise<Complaint[]>{
        return await this.complaintModel.find().sort({ createdAt: -1 }).limit(3).exec();

    }
    async getAll():Promise<Complaint[]>{
        return await this.complaintModel.find().exec();
    }
    async delete(complaintId:string):Promise<Complaint>{
        return await this.complaintModel.findByIdAndDelete(complaintId).sort({ createdAt: -1 }).exec();

    }
}
