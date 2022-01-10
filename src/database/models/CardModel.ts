import { Schema, model } from 'mongoose';

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

export default model('Card', CardSchema);
