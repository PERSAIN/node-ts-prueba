import 'reflect-metadata';
import  Router  from '../../routes/Router';

//Remeber, when u create a decorator for a complete CLASS, you will recive ass a targe not the prototype
// u will get the constructor of the class
const controller = (routePrefix: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Function) => {
    const router = Router.getInstance();
    console.log('controller target =>',target);
    // eslint-disable-next-line prefer-const
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      if(path){
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
};

export { controller };
