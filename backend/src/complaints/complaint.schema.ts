import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';
import { Company } from '../companies/company.schema'; // Import the Company schema

@Schema()
export class Complaint extends Document {
  @Prop({ type: User, required: true })
  user: User;

  @Prop({ type: Company, required: true }) // Include the product field from the Company schema
  product: Company;

  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  file: string;

  @Prop({ required: true })
  priority: string;

  @Prop({ required: true })
  desiredOutcome: string;

  @Prop({ required: true })
  terms: boolean;
}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);
