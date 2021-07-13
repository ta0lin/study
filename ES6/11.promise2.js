/**
 *解决异步的方案
 * 高阶函数
 * 1。一个函数返回一个函数 callback
 * 2。函数可以当作参数 函数可以返回函数 （偏函数 函数柯里化）
 * promise
 * generator + co
 * async await
 *
 * **/

//函数可以返回函数  判断类型
function isType(type){
    return function (obj){
        let t = Object.prototype.toString.call(obj).replace(/\[object\s|\]/g,'')
        return t === type
    }
}
let arr = ['String','Array','Number','Boolean','Null']
let util = {}
arr.forEach(item=>{
    util['is'+item] = isType(item)
})
console.log(util);
console.log(util.isString('123'));

//函数可以当作参数传递 callback传递进去 当达到某个条件时执行callback
function iseat(time,callback){
    return function (){
        if (--time === 0){
            callback()
        }
    }
}
let eat = iseat(3,function (){
    console.log('hahahha')
})
eat()
eat()
eat()
