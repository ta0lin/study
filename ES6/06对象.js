//合并两个对象 assign 浅拷贝  ...同一个效果
let one = {name:'taolin'},
    two = {age:27};
let obj = Object.assign(one,two);
console.log(obj);
console.log({...one,...two});

//__proto__链
obj1.__proto__ = obj2
Object.setPrototypeOf(obj1,obj2)  //等价于上面的  设置
Object.getPrototypeOf('obj1')   // 获取
//可以通过super关键字获取到父属性
