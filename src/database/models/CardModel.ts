import { Schema, model, Document } from 'mongoose';

const CardSchema = new Schema(
  {
    title: { type: String, required: true },
    photoPath: String,
    description: { type: String, required: true },
    shortDescription: { type: String, required: true }
  },
  {
    timestamps: true // add "created at and updated at"
  }
);

CardSchema.index({title:'text'});

export interface ICard extends Document {
  _id: number,
  title: string,
  photoPath: string,
  description: string,
  shortDescription: string
}

export default model<ICard>('Card', CardSchema);
