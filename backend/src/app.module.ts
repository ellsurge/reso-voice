import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComplaintsModule } from './complaints/complaints.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [        
  MongooseModule.forRoot('mongodb://localhost:27017',
  {
      useNewUrlParser:true,
      useUnifiedTopology:true,
  }),
    ComplaintsModule, UsersModule, CompaniesModule, AuthModule, JwtModule.register({secret:'ligma', signOptions:{expiresIn:'1h'},}),],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})  
export class AppModule {}
