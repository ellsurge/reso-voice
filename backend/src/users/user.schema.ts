import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument } from 'mongoose';
import bcrypt from 'bcrypt';

export type UserDocumet = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  matNumber: string;

  @Prop({ required: true })
  password: string;

  // Other fields specific to the User schema
  async comparePassword(password: string): Promise<boolean>{
    return await bcrypt.compare(password, this.password)
  }

  // ...
}

export const UserSchema = SchemaFactory.createForClass(User);
