import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import CardModel, { ICard } from '../database/models/CardModel';

//importing all decorators functions
import { get, controller } from './decorators';

@controller('/cards')
export class CardsController {
  @get('/:id')
  async getCard(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const card = await CardModel.findById(id);
      return res.status(200).json(card);
    } catch (error) {
      return res.status(404).json(error);
    }
  }
}
export class CardsControllerOld {
  @get('/')
  async getCard(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const card = await CardModel.findById(id);
      return res.status(200).json(card);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async getCardSearched(req: Request, res: Response): Promise<Response> {
    try {
      const { searchedValue } = req.body;
      console.log(searchedValue);
      const cards = await CardModel.find({ $text: { $search: `${searchedValue}` } });
      return res.status(200).json(cards);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async getCards(req: Request, res: Response): Promise<Response> {
    try {
      const cards = await CardModel.find();
      return res.status(200).json(cards);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async createCard(req: Request, res: Response): Promise<Response> {
    const { title, description, shortDescription } = req.body;
    const newCard = {
      title: title,
      photoPath: req.file?.path,
      description: description,
      shortDescription: shortDescription
    };
    const card: ICard = new CardModel(newCard);
    await card.save();
    return res.status(201).json({ message: 'createdCard', card });
  }

  async updateCard(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const updatedCard = await CardModel.findByIdAndUpdate(id, {
        title,
        description
      });
      return res.status(200).json({
        message: 'Successfully updated',
        updatedCard
      });
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async deleteCard(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const card = await CardModel.findByIdAndRemove(id);
      if (card) await fs.unlink(path.resolve(card.photoPath));
      return res.status(202).json({ message: 'cardDeleted', card });
    } catch (error) {
      return res.status(404).json(error);
    }
  }
}
