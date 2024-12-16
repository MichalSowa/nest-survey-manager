import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Survey extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [String], required: true })
  options: string[];

  @Prop({ type: Map, of: Number, default: {} })
  votes: Map<string, number>;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
