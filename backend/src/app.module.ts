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
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/jwt.strategy';


// config();
@Module({
  imports: [   
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),     
    MongooseModule.forRoot(process.env.MONGODB_URI),
    ComplaintsModule, UsersModule, CompaniesModule, AuthModule, PassportModule, JwtModule.register({secret:'ligma', signOptions:{expiresIn:'1d'},})
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, JwtStrategy],
})  
export class AppModule {
  // constructor(private readonly connection: MongooseModule) {
  //   this.logDatabaseConnection();
  // }

  // private logDatabaseConnection() {;
  //   console.log(`MongoDB connected: ${this.connection}`);
  // }
}

