import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import CardModel, { ICard } from '../database/models/CardModel';

//importing all decorators functions
import { get, post, controller, put, del, useMiddleware } from './decorators';

//importing Middlewares
import logger from '../middlewares/logger';
import multer from '../middlewares/multer';

@controller('/cards')
export class CardsController {
  @get('/all')
  async getCards(req: Request, res: Response): Promise<Response> {
    try {
      const cards = await CardModel.find();
      return res.status(200).json(cards);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

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

  @post('/searched')
  async getCardSearched(req: Request, res: Response): Promise<Response> {
    try {
      const { searchedValue } = req.body;
      const cards = await CardModel.find({ $text: { $search: `${searchedValue}` } });
      return res.status(200).json(cards);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  @post('/newcard')
  @useMiddleware(logger)
  @useMiddleware(multer.single('photo'))
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

  @put('/update')
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

  @del('/delete')
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
