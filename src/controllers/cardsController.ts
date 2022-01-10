import { Request, Response } from 'express';

import CardModel, { ICard } from '../database/models/CardModel';

export class CardsController {
  getCard(req: Request, res: Response): Response {}

  getCards(req: Request, res: Response) {}

  createCard(req: Request, res: Response) {}

  deleteCard(req: Request, res: Response) {}
}
