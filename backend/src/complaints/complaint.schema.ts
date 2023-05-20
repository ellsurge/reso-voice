import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';
import { Company } from '../companies/company.schema'; // Import the Company schema

@Schema()
export class Complaint extends Document {
  @Prop({ type: User, required: true })
  user: User;


  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  priority: string;

  @Prop({ required: true })
  desiredOutcome: string;

}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);
