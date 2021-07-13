//父类
class Parent {
    constructor() {
        this.name = 'parent'
    }

    static b() {
        return 2
    }

    eat() {
        console.log('parent eat')
    }

}

//类
class Child extends Parent{
    constructor() {
        super()    //相当于Parent.call(this)
        this.age = 9; //私有属性
    }

    static a() {       //静态方法
        return 1
    }

    smoking() {
        console.log("哈哈哈哈")  //原型上的方法
    }
}

let child = new Child();
console.log(child.age);
console.log(child.smoking);
console.log(Child.a);      //静态方法属于类上的方法
console.log(child.name)
console.log(Child.b)
console.log(child.eat())

//类可以继承共有私有和静态方法
//父类的构造函数中 返回一个引用类型 会把这个引用类型作为子类的this
