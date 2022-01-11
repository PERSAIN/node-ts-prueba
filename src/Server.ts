import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import Config from './config';
import CardRoutes from './routes/cards.routes';

const config: Config = Config.getInstance();

export default class Server {
  private app!: express.Application;
  private port: string = config.port;

  constructor() {
    this.createServer();
    this.middlewares();
    this.getRoutes();
    this.getPhotos();
    this.startServer();
  }

  public getApp(): express.Application {
    return this.app;
  }

  private createServer(): void {
    this.app = express();
  }

  private middlewares(): void {
    this.app.use(morgan('dev'));// we use this to see all the http querys (get,post,dekete,put)
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());// Is based in bodyParser
    this.app.use(cors());
    /* this.app.use(helmet()); */
  }

  private getRoutes(): void {
    this.app.use(CardRoutes);
  }

  private getPhotos(): void {
    this.app.use('/uploads', express.static(path.resolve('uploads')));
  }

  private startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`Listening on http://localhost:${this.port}`);
    });
  }
}
