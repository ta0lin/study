/**
 * Promise es6中
 generator async await都是基于promise
 koa axios redux-saga  基于promise
 fetch  基于promise

 promise是一种异步流程的控制手段
 原先的异步 ajax
 1.回调地狱 代码难维护 第一个的输出是第二个的输入
 promise优点 1 链式调用 成功再掉下一个

 2可以支持多个并发的请求 获取并发请求中的数据
 promise  可以解决异步的问题 本身不能说是异步的 then方法是异步

 promise 关键字 resolve 表示成功 reject  表示失败  pending 等待
 如果一旦promise成功了 就不能失败 相反一样 只有等待的时候可以转到成功或者失败

 事件环 promise只有一个参数 叫做excutor 执行器 默认new时就会调用
 默认promise中的excutor是同步执行的
 每一个promise的实例上都有一个then党法 then方法有两个参数 一个参数叫做成功的函数 一个是失败的函数
 只要promise中有错误 就会执行失败太 报错抛出异常

 promise可以实现不在传递回调函数
 promise 链式调用 返回的不是this 是一个新的promsie
 如果返回的是一个普通值 会走下个then中的陈工回调
 上一个promise是失败的 下一个promise可能会走成功
 一个promise的实例 可以 then多次

 promise上的方法 promise.all([p1,p2]) 并发的 有一个失败全失败 成功返回的是一个数组

 race 赛跑 返回一个数据 谁的数据先返回就用谁的 处理多请求的时候只取最快的

 Promise.resolve('123).then(data=>{
 console.log(data)  //直接成功  返回一个成功的promsie
 })
 Promise.reject()返回一个失败promise

 *
 * */

let Promise = require('./12.promise3')
let p = new Promise((resolve,reject)=>{
    // resolve('123')
    // reject(123)
    setTimeout(()=>{
        resolve(123)
    },1000)  //then的时候既没有成功也没有失败 所以就返回空
})
p.then(res=>{
    console.log('成功')
},err=>{
    console.log('失败',err)
})
p.then(res=>{
    console.log('成功')
},err=>{
    console.log('失败',err)
})
