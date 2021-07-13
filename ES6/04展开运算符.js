let arr = [1,2,3,4].concat([5,6,7])
let arr1 = [...[1,2,3],...[4,5,6]]
//arr和arr1是等价的
//...也可以应用与对象 ...是浅拷贝
//slice有拷贝功能 arr.slice(0) slice是一个浅拷贝 如果拷贝一层 就是深拷贝
//深拷贝： 拷贝出来的东西完全没有关系
//浅拷贝： 拷贝出来的东西受另一个改变而随之改变
//...是浅拷贝 拷贝一层是深拷贝
//如何实现一个深拷贝
//1.JSON.parse(JSON.stringify())  只针对于json 函数正则继承什么都不可以
//实现深拷贝 保留继承关系 可实现各种类型的拷贝 实现低谷拷贝
function  deepClone(obj){
    if (obj == null) return null
    if (typeof (obj)!="object") return obj
    if (obj instanceof(Date)) return new Date(obj)
    if (obj instanceof (RegExp)) return new RegExp(obj)
    Object.prototype.toString().call(obj) == ['Array Object']
    let o = new obj.constructor(); //保留类的继承关系
    for(let key in obj){
        o[key] = typeof(obj[key])=='object'?deepClone(obj[key]):obj[key]
    }
    return o
}
deepClone()
