import { Body, ConflictException, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { User } from './user.schema';
import { CreateDto } from './user.dto';

@Controller('users')
// @UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('findall')
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('find')
  async find(@Query('matNumber') matNumber: string): Promise<User> {
    return await this.userService.findByMatnumber(matNumber);
  }

  @Get('get')
  async gets(@Query('id') id: string): Promise<User> {
    return await this.userService.findById(id);
  }

  @Post('create')
  async create(@Body() createUserDto: CreateDto): Promise<User> {
    console.log(createUserDto.matNumber);
    if (await this.userService.findByMatnumber(createUserDto.matNumber)) {
      throw new ConflictException('User already exists');
    }
    return this.userService.create(createUserDto);
  }
}
