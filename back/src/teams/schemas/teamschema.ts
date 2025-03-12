import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Teams extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: Number })
  birth: string;

  image: string;

  @Prop({ required: true })
  history: string;
}

export const TeamsSchema = SchemaFactory.createForClass(Teams);
