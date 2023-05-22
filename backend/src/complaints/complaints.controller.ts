import { Body, Controller, Get, Post } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { Complaint } from './complaint.schema';
import { CreateDto } from './complaint.dto';

@Controller('complaints')
export class ComplaintsController {
    constructor(private readonly complaintsServices :ComplaintsService){}
    //TODO
    //[] get only 3
    @Get('latest')
    async latest():Promise <Complaint[]>{
        return await this.complaintsServices.getLatest()
    }
    @Get('')
    async all():Promise<Complaint[]>{
        return await this.complaintsServices.getAll()
    }

    @Post('create')
    async create(@Body() createDto:CreateDto):Promise<Complaint>{
        
        return await this.complaintsServices.create(createDto);
    }
    
}
