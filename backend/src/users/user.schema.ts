import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import bcrypt from 'bcrypt';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  password: string;

  // Other fields specific to the User schema
  async comparePassword(password: string): Promise<boolean>{
    return await bcrypt.compare(password, this.password)
  }

  // ...
}

export const UserSchema = SchemaFactory.createForClass(User);
