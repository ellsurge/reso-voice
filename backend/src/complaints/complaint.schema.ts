import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';

@Schema()
export class Complaint extends Document {
  @Prop({ type: User, required: true })
  user: User;
  @Prop({ required: true })
  title: string;

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

  @Prop({ default: Date.now }) 
  createdAt: Date;

}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);
