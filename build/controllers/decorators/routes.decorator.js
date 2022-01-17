"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example = exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var HttpMethodsEnum_1 = require("./enums/HttpMethodsEnum");
var MetaDataKeysEnum_1 = require("./enums/MetaDataKeysEnum");
//reflect-metada is a library that will help us to save metada in an object
//in this case prototype from our classes
var example = function (path) {
    //decorators:
    //a decorator receive 3 arguments
    //1 => target, the target is the prototype object from the class
    // what is prototype? prototype is an object with all the method and properties from a class.
    //2 => key, is the specific method or property where you are putting your decorator
    //3 => desc, is a propertyDescriptor... the name explain what it does, but search in internet if u dont know,
    return function (target, key, desc) {
        //how it works?
        //first argument is the pathRoute we want to use and we put that property in prototype object.
        //the second part we add the VALUE of the path, thats the input from our decorator.
        //the next part is the object we want to add the last to arguments, in this case prototype.
        //the las part we use to assing all the information we want to add to a property that already exist.
        Reflect.defineMetadata('path', path, target, key);
    };
};
exports.example = example;
var routerBinder = function (method) {
    return function (path) {
        return function (target, key, desc) {
            console.log('target =>', target);
            console.log('key =>', key);
            Reflect.defineMetadata(MetaDataKeysEnum_1.MetaDataKeys.path, path, target, key);
            Reflect.defineMetadata(MetaDataKeysEnum_1.MetaDataKeys.method, method, target, key);
        };
    };
};
var get = routerBinder(HttpMethodsEnum_1.HttpMethods.get);
exports.get = get;
var post = routerBinder(HttpMethodsEnum_1.HttpMethods.post);
exports.post = post;
var put = routerBinder(HttpMethodsEnum_1.HttpMethods.put);
exports.put = put;
var del = routerBinder(HttpMethodsEnum_1.HttpMethods.del);
exports.del = del;
var patch = routerBinder(HttpMethodsEnum_1.HttpMethods.patch);
exports.patch = patch;
//# sourceMappingURL=routes.decorator.js.map