/**
 * node服务端中有什么属性
 * global属性 代表的就是全局对象
 * 重要的属性
 * Buffer 处理二进制文件
 * process 代表的是进程（重要）
 * global
 * clearInterval clearTimeout setInterval  setTimeout
 * clearImmediate  setImmediate  是宏任务
 * 浏览器以前的方法还是可以使用 默认没有被枚举出来
 *
 * 1.process global的属性不用加global（node中有一个模块系统 以文件为单位 每个文件都是一个模块 模块中的this被更改了）
 *     plateform 可以判断当前的系统环境 win32  dawin
 *     argv 1.node.exe 2.当前执行的文件 可以用来解析用户自己传的参数
 *     两个重要模块 commander  TJ  yargs webpack
 *     在npm上的莫模块 成为第三方模块 先安装在使用（模块内部提供的）通过require引入
 *     commander  option设置参数 command 设置指令 action动作是一个方法 name 命名 usage 用户使用提示
 *     当用户在哪里执行指令的时候 就去哪里找配置文件
 *     ep:  node 02commander的用法.js a b c d
 *          webpack --mode --config --port --process 获取的时候 以--开头的为key 没有为value
 *     cwd  当前用户的工作目录 是一个方法 （这个目录可以更改） __dirname 当前文件所在的目录 不可以修改 不是global属性
 *
 *     env  环境变量  可以根据环境变量实现不同的功能
 *     window set key = value
 *     other export key = value 临时变量
 *
 *     nextTick 方法
 *
 **/
// console.log(Object.keys(global))
console.log(process.argv)
console.log(process.cwd())
const program = require('commander')
program.name('node')
    .usage('my node')
    .version('1.0.0')
    .option('-p,--port<v>','set your port')
    .option('-c,config<v>', 'set your file comfig')
    .parse(process.argv)
console.log(program);
