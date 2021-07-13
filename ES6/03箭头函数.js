//写起来简单 解决this的问题
///函数 高阶函数
//1.箭头函数没有function
//2.小括号和大括号之间有个箭头
//3.如果参数是一个可以省略（）
//4.如果没有返回值 {}可以省略
//如果直接返回对象类型 需要小括号包裹

//this指代的是谁 看.前面的是谁就是谁
let obj = {
    b:1,
    a:function (){
        //1
        //console.log(this)//
        //3
        setTimeout(function (){
            console.log(this)
        },1000)
    }
}

//1
console.log(obj.a) //看.前面是谁 是obj
//2
var fn = obj.a;
fn() // fn由window调用 所以this指向window

//3
obj.fn()  //this指代window setTimeout 由window调用 解决办法var that = this
          // 或者给里面的方法bind（this） setTimeout(function(){}.bind(this),1000)
          // 或者里面换成箭头函数
          // 对象不是作用域
          //let 声明也不会声明到全局上
          //箭头函数没有arguments
//...剩余运算符
// let fns = ('x',...args)=>{
//     console.log(args)
// }
let fns = ('x',...args)=>{
    console.log(args)
}
fns('x',1,2,3,4,5)

console.log(arr1);
