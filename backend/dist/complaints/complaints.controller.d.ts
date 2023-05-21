import { ComplaintsService } from './complaints.service';
import { Complaint } from './complaint.schema';
import { CreateDto } from './complaint.dto';
export declare class ComplaintsController {
    private readonly complaintsServices;
    constructor(complaintsServices: ComplaintsService);
    latest(): Promise<Complaint[]>;
    all(): Promise<Complaint[]>;
    create(createDto: CreateDto): Promise<Complaint>;
}
