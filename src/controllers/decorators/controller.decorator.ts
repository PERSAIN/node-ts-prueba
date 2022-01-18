import 'reflect-metadata';
import Router from '../../routes/Router';
import { HttpMethods } from './enums/HttpMethodsEnum';
import { MetaDataKeys } from './enums/MetaDataKeysEnum';

//Remeber, when u create a decorator for a complete CLASS, you will recive ass a targe not the prototype
// u will get the constructor of the class
const controller = (routePrefix: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Function) => {
    const router = Router.getInstance();
    // eslint-disable-next-line prefer-const
    for (let key in target.prototype) {
      console.log(key);
      const routeHandler = target.prototype[key];
      console.log('routeHandler en controller =>',routeHandler);
      const path = Reflect.getMetadata(MetaDataKeys.path, target.prototype, key);
      console.log('path en controller =>',path);
      const method: HttpMethods = Reflect.getMetadata(MetaDataKeys.method, target.prototype, key);
      console.log('method en controller =>',method);
      const middlewares = Reflect.getMetadata(MetaDataKeys.middleware, target.prototype, key) || [];
      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
};

export { controller };
