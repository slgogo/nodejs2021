// const greenting = 'hello~';
// console.log(greenting);

const http=require('http');
const server=http.createServer((request,response)=>{
    response.write('NODEJS服务器开启测试！');
    response.end();
});
server.listen(3000,()=>{
    console.log('服务器已启动！');
});
