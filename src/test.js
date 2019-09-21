//这是node中向外暴露成员的形式
//module.exports = {}

//在ES6中也通过规范的规定也规定了如何导入和导出模块

//ES6中导入模块，使用import 模块名称from '模块标识符' import '路径'

//在ES6中使用export default向外暴露成员
export default {
    name:'qs',
    age:'23'
}
//export default向外暴露的成员可以使用任意变量来接收，包括下面那种有名字的对象
//在一个模块中export default只允许向外暴露一次不能多次
//在一个模块中可以同时使用export default和export向外暴露成员
// const info={
//     name:'zs',
//     age:20
// };
//  export  default info;

//在node中使用var 名称 =require（'标识符'）
//module.exports = {}  和exports来暴露成员


export var title='小星星';
export var title2='我是第二个';
//使用export向外暴露的成员只能使用{}的方式进行接收，这种形式叫做【按需导出】
//注意export可以向外暴露多个成员，如果某些成员我们在import时不需要，就可以不写，需要几个写几个
//注意：使用export导出的成员，必须严格按照导出时候的名称，来使用{}按需接收
//注意：使用export导出的成员如果就想换个名称来接收可以使用as来起别名例如 import {title as title123} from './test.js'