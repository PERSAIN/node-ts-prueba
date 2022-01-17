import multer from '../middlewares/multer';
import { CardsControllerOld } from '../controllers/cardsController';
import { RouterInitializer } from './RouterInitialiazer';

class CardRoutes extends RouterInitializer {
  constructor() {
    super();
    this.routes();
  }
  routes() {
    const cardsController = new CardsControllerOld();
    this.router
      .route('/cards')
      .get(cardsController.getCards)
      .post(multer.single('photo'), cardsController.createCard)
      .put(cardsController.updateCard)
      .delete(cardsController.deleteCard);

    this.router.route('/cards/:id').get(cardsController.getCard);
    this.router.route('/cards/searched').post(cardsController.getCardSearched);
  }
}

const cardRoutes = new CardRoutes();
export default cardRoutes.router;
