import AppRouter from "./AppRouter";

const router = AppRouter.getInstance();

class CardRoutes {
  routes() {
    router.route('/');
  }
}