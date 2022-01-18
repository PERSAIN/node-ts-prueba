import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetaDataKeys } from './enums/MetaDataKeysEnum';

const useMiddleware = (middleware: RequestHandler) => {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    const middlewares = Reflect.getMetadata(MetaDataKeys.middleware, target, key) || [];
    Reflect.defineMetadata(MetaDataKeys.middleware, [...middlewares, middleware], target, key);
  };
};

export {useMiddleware};