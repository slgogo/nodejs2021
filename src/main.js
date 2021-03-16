const express = require('express');
const app = express();
const port =3000;
app.listen(port,()=>{
    console.log('express服务已启动！');
});
app.get('/',(request,response)=>{
    response.send('你好，这里是get方法的response方法的send方法返回的信息！');
});

const data=[
      {
          id:1,
          title:'军歌',
          content:'向前向前向前。。'
      },
      {
          id:2,
          title:'军服',
          content:'87式，99式，07式'
      },
      {
          id:3,
          title:'军帽',
          content:'大檐帽、作训帽、贝雷帽'
      }

];

app.get('/posts',(request,response)=>{
    response.send(data);
});

app.get('/posts/:postId',(request,response)=>{
    const {postId} = request.params;
    const posts = data.filter(item=>item.id==postId);

    response.send(posts[0]);
});