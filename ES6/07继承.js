//es5没有类的概念 构造函数
//es6 类
//类的继承 三种属性 共有属性 私有属性 (__proto__)  静态方法（静态属性）

//继承私有属性
//构造函数中的this 通过new调用 那么this指向实例
//原型上自带constructor属性
//实例先会找私有属性 没有再通过__proto__上原型上找
function Parent(){
    this.name = 'parent'
}
Parent.prototype.eat = function (){
    console.log('eat')
}
function Child (){
    this.age = 17;
    //1改变this的指向  继承私有属性
    Parent.call(this);

}
let child = new Child();
//child 想要继承Parent的私有属性  1改变parent的this指向


//继承共有属性
//1.子类的__proto__  =  父类.prototype   Child.__proto__ = Parent.prototype
//2.object.setPrototypeOf(Child.prototype,Parent.prototype)
//3.Object.create()   Child.prototype = Object.create(Parent.prototype,{consdtructor:{value:Child}})  只继承共有
//Object.create()实现
//缺点：需要手动设置constructor的指向


//Object.defineProperty(对象,{   给对象设置值
//    enumerable:true  是否可以枚举
//    configurable:true, 是否可以删除
//    writable:true      是否可以写入
// })
//只继承共有属性

//继承共有和私有属性

