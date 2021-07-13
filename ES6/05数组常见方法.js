//map（some、every、filter）  es5
//find findIndex es6
//reduce  收敛 叠加
//函数的返回结果会做下一次的prev
[1,2,3,4,5].reduce((prev,next,currentIndex,arr)=>{

})
var num = [{price:10},{price:20},{price:30}].reduce((prev,next,currentIndex,arr)=>{
    return prev+next.price
},0) //保证是数字
//for of
Array.prototype.myReduce = function (fn,prev) {
    console.log(this)
    for (var i= 0;i<this.length;i++){
        if (prev == undefined){
            prev = fn(this[i],this[i+1],i+1,this);
            ++i;
        }
        else{
            prev = fn(prev,this[i],this)
        }
    }
    return prev
}
var result = [1,2,3].myReduce((prev,next,currentIndex,ary)=>{
    return prev +next
},0)
console.log(result);

//展平数组
let flat = [[1,2,3],[4,5,6]].reduce((prev,next,currentIndex,arg)=>{
    return [...prev,...next];
})
console.log(flat,'flat')

//map有返回值 返回值是一个新数组
Array.prototype.maps = function (fn){
    var newarr=[]
    for (var i=0;i<this.length;i++){
        newarr.push(fn(this[i],i))
    }
    return newarr
}
let arr1 = [1,2,3].map(item=>{
    return item*2
})
console.log(arr1)

//filter 过滤 返回true的表示留下 false表示删除  返回一个新数组
//find查找 会返回查找的一项 找到后不会继续查找
//some找到后返回true 不继续查找
//every查找到false 不继续查找
//includes 包含
//Array.from 将类数组转换为数组  常见的类数字 htmlCollection arguments
//for of

