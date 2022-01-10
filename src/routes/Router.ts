import { Router } from 'express';

export class RouterInitializer {
  router: Router;

  constructor() {
    this.router = Router(); //inicializa la capacidad de crear rutas con express
  }
}

const routerInitializer = new RouterInitializer();
export default routerInitializer.router;
