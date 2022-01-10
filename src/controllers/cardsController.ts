import { Request, Response } from 'express';

import CardModel, { ICard } from '../database/models/CardModel';

export default class CardsController {
  getCard(req: Request, res: Response): void {
    res.json({ message: 'gettingOnecard' });
  }

  getCards(req: Request, res: Response) {
    res.json({ message: 'gettingAllTheCards' });
  }

  createCard(req: Request, res: Response) {
    res.json({ message: 'createCard' });
  }

  updateCard(req: Request, res: Response) {
    res.json({ message: 'updatingCard' });
  }

  deleteCard(req: Request, res: Response) {
    res.json({ message: 'deletingCard' });
  }
}
