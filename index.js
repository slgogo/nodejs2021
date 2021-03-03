// console.log("你好！");
// function log(){
//     console.log('函数输出。');
// }
// log();

const great=(name)=>{  //箭头函数传入形参name
    return '姓名：'+name;  //函数内部返回字符串和传入的形参变量
}

const greating=great('小白兔');  //定义常量把箭头函数传入参数执行后的结果赋值给常量

// console.log(greating);  //调用常量

//对象里的函数方法
const peson={
    name:'小白兔开发之路！',
    age:'39',
    fun(){
        return `小白的名字：${this.name},小白的年龄：${this.age}`;
    }
}

const array=[
    'one','two','three','four','five'
];
const [f1,f2,f3,f4,f5]=array;
console.log(f1,f2,f3,f4,f5);

const array01 =[87,99,07,15,16,18,19];
const array02 =['帽徽','领花','肩章','常服','礼服','作训服'];

const junpin =[...array01,...array02];
console.log(junpin);
// const {name,age}=peson;  //解构对象，取出对象中的属性
// console.log(name,age);
// console.log(peson.fun());

// const book = {
//     title:'小白兔开发之路',
//     toString(){
//         return `《${this.title}》`;
//     },
// };
// console.log(book.toString());