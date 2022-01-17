import 'reflect-metadata';
import { HttpMethods } from './enums/HttpMethodsEnum';
import { MetaDataKeys } from './enums/MetaDataKeysEnum';

//reflect-metada is a library that will help us to save metada in an object
//in this case prototype from our classes
const example = (path: string) => {
  //decorators:
  //a decorator receive 3 arguments
  //1 => target, the target is the prototype object from the class
  // what is prototype? prototype is an object with all the method and properties from a class.
  //2 => key, is the specific method or property where you are putting your decorator
  //3 => desc, is a propertyDescriptor... the name explain what it does, but search in internet if u dont know,
  return (target: any, key: string, desc: PropertyDescriptor) => {
    //how it works?
    //first argument is the pathRoute we want to use and we put that property in prototype object.
    //the second part we add the VALUE of the path, thats the input from our decorator.
    //the next part is the object we want to add the last to arguments, in this case prototype.
    //the las part we use to assing all the information we want to add to a property that already exist.
    Reflect.defineMetadata('path', path, target, key);
  };
};
const routerBinder = (method: string) => {
  return (path: string) => {
    return (target: any, key: string, desc: PropertyDescriptor) => {
      console.log('target =>', target);
      console.log('key =>', key);
      Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.method, method, target, key);
    };
  };
};

const get = routerBinder(HttpMethods.get);
const post = routerBinder(HttpMethods.post);
const put = routerBinder(HttpMethods.put);
const del = routerBinder(HttpMethods.del);
const patch = routerBinder(HttpMethods.patch);
//we can keep adding httpmethos with this code

export { get, post, put, del, patch, example };
