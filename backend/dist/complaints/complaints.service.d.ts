import { Model } from 'mongoose';
import { Complaint } from './complaint.schema';
import { CreateDto } from './complaint.dto';
export declare class ComplaintsService {
    private readonly complaintModel;
    constructor(complaintModel: Model<Complaint>);
    create(complaintData: CreateDto): Promise<Complaint>;
    getLatest(): Promise<Complaint[]>;
    getAll(): Promise<Complaint[]>;
    delete(complaintId: string): Promise<Complaint>;
}
