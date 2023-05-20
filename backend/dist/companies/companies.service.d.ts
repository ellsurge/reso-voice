import { Model } from 'mongoose';
import { Company } from './company.schema';
import { CreateDto, UpdateDto } from './company.dto';
export declare class CompaniesService {
    private readonly companyModel;
    constructor(companyModel: Model<Company>);
    create(companyData: CreateDto): Promise<Company>;
    getAll(): Promise<Company[]>;
    update(companyID: string, newData: UpdateDto): Promise<Company>;
    delete(companyId: string): Promise<Company>;
}
