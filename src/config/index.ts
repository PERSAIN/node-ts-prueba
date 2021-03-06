import dotenv from 'dotenv';

// We create a singleton class here

export default class Config {
  private static instance: Config;

  private constructor() {
    dotenv.config();
  }

  public static getInstance(): Config {
    // Lazytest
    if (!this.instance) {
      this.instance = new Config();
    }
    return this.instance;
  }

  public get port(): string {
    return process.env.PORT || '3000';
  }

  public get cors(): string {
    return process.env.CORS || '*';
  }

  public get mongoUri(): string {
    return process.env.MONGODB_URI || "mongodb://localhost/prueba-typescript";
  }

}

