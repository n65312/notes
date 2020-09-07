# 原型和原型链

所有对象都是通过`new 函数`创建。
所有函数也是对象。
函数中可以有属性。
所有对象都是引用类型。

## 原型 prototype

所有函数都有一个属性：`prototype`，称之为函数原型。

默认情况下：

`prototype`是一个普通 **Object** 对象；

`prototype`中有一个属性，`constructor`，它也是一个对象，它指向构造函数本身。

<img :src="$withBase('/assets/constructor.png')" alt="constructor">

## 隐式原型 \_\_proto\_\_

所有的对象都有一个属性：`__proto__`，称之为隐式原型。

默认情况下，隐式原型指向创建该对象的函数的原型。

<img :src="$withBase('/assets/proto.png')" alt="proto">

当访问一个对象的成员时：

1. 看该对象自身是否拥有该成员，如果有直接使用；
2. 在原型链中依次查找是否拥有该成员，如果有直接使用。

猴子补丁：在函数原型中加入成员，以增强对象的功能，猴子补丁会导致原型污染，谨慎使用！

## 原型链

<img :src="$withBase('/assets/Prototype chain.png')" alt="Prototype chain">

特殊点：

1. **Function** 的`__proto__`指向自身的 `prototype`
2. **Object** 的 `prototype` 的`__proto__`指向 `null`
