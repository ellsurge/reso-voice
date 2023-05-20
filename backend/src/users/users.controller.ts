import { Body, ConflictException, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { User } from './user.schema';
import { CreateDto } from './user.dto';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
    constructor (private readonly userService: UsersService){}

    @Get()
    async getAllUsers(): Promise<User[]>{
        return this.userService.findAll();

    }
    @Post('create')
    async create(@Body() createUserDto: CreateDto):Promise<User>{
        if(!(await this.userService.exists(createUserDto.username)).username ){
            throw new ConflictException ("user alredy exists")
        }
        return this.userService.create(createUserDto)

    }
}
