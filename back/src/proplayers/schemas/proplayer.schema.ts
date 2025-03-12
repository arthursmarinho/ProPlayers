import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProPlayer extends Document {
  @Prop({ required: true }) // Adicionando a validação de que o campo é obrigatório
  name: string;

  @Prop({ required: true, type: Number }) // Alterado para number e com validação
  age: string;

  @Prop({ required: true }) // Adicionado o required caso a imagem seja obrigatória
  image: string;

  @Prop({ required: true }) // Adicionado o required caso o time seja obrigatório
  team: string;

  @Prop({ required: true }) // Adicionado o required caso o histórico seja obrigatório
  history: string;

  @Prop({ required: true }) // Adicionado o required caso a sensibilidade seja obrigatória
  sensi: string; // Pode ser alterado para number dependendo de como você está utilizando
}

export const ProPlayerSchema = SchemaFactory.createForClass(ProPlayer);
