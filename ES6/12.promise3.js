//手写promise
function  resolvePromise(promise2,x,resolve,reject){
    //判断x是不是promise
    //规范里规范了一段代码 判断我们的promse和别人的promise是不是可以互相调用
    if (promise2 === x){   //不能自己等待自己完成 不会成功也不会失败
        return reject(new TypeError('重复调用'))
    }
    if (x!==null && (typeof x === 'object' || typeof x === 'function')){
        //防止取then时有异常 Object.defineProperty给x设置一个then的属性值
        try {
            let then = x.then //取x的then方法
            if(typeof then === 'function'){
                //call的第一个参数是this 第二个是成功的回调 第三个是失败的回调
                then.call(x,y=>{
                    //y有可能还是一个promise 就继续递归解析promimse
                    resolvePromise(promise2,y,resolve,reject)
                },err=>{  //失败了就失败了
                    reject(err)
                })
            } else{
                resolve(x) //then是一个普通对象 那么直接就返回x
            }
        } catch (err){
            reject(err)
        }
    } else{
        resolve(x) //x为普通值时直接返回
    }
}
class Promise{
    constructor(excutor) {
        //状态
        this.status = 'pending'
        //成功返回值
        this.value = undefined
        //失败返回值
        this.reason  = undefined
        //缓存成功的promose的值
        this.resolveCallback = []
        //缓存失败promise的值
        this.rejectCallback = []

        let resolve = values => {
            if (this.status === 'pending'){
                this.status = 'resolve'
                this.value = values
                this.resolveCallback.forEach(fn=>{
                    fn()
                })
            }
        }
        let reject = reason =>{
            if (this.status === 'pending'){
                this.status = 'reject'
                this.reason = reason
                this.rejectCallback.forEach(fn=>{
                    fn()
                })
            }
        }
        try {
            excutor(resolve,reject)
        } catch (err){
            reject(err)
        }
    }
    then(onFufiled,onReject){
        let promise2
        //成功状态时调用成功的方法
        if (this.status === 'resolve'){
            promise2 = new Promise((resolve,reject)=>{
                //看x的值是不是promise 如果是promise 其他的结果作为promise2成功的结果
                //如果为普通值 直接作为promise2成功的结果
                let x = onFufiled(this.value)
                //解析x和promise 的关系
                resolvePromise(promise2,x,resolve,reject)
            })
        }
        //失败时调用失败的方法
        if (this.status === 'reject'){
            promise2 = new Promise((resolve,reject)=>{
                let x = onReject(this.reason)
                resolvePromise(promise2,x,resolve,reject)
            })
        }
        //既没有成功也没有失败时
        if (this.status === 'pending'){
            //存放成功时的回调方法
            promise2 = new Promise((resolve,reject)=>{
                this.resolveCallback.push(()=>{
                    let x = onFufiled(this.value)
                    resolvePromise(promise2,x,resolve,reject)
                })
            })
            //存放失败时的回调方法
            promise2 = new Promise((resolve,reject)=>{
                this.rejectCallback.push(()=>{
                   let x = onReject(this.reason)
                    resolvePromise(promise2,x,resolve,reject)
                })
            })
        }
        return promise2
    }
}
module.exports = Promise
