import multer from '../middlewares/multer';
import CardsController from '../controllers/cardsController';
import { RouterInitializer } from './Router';

class CardRoutes extends RouterInitializer {
  constructor() {
    super();
    this.routes();
  }
  routes() {
    const cardsController = new CardsController();
    this.router
      .route('/card')
      .get(cardsController.getCard)
      .post(multer.single('photo'), cardsController.createCard)
      .put(cardsController.updateCard)
      .delete(cardsController.deleteCard);

    this.router.route('/cards').get(cardsController.getCards);
  }
}

const cardRoutes = new CardRoutes();
export default cardRoutes.router;