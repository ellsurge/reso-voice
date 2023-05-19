import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Company extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  // Other fields specific to the Company schema

  // ...
}

export const CompanySchema = SchemaFactory.createForClass(Company);
