import express from 'express';
import { Request, Response } from 'express';
const app = express();
const port = 3000;

/*使用JSON中间件*/
app.use(express.json());

app.listen(port, () => {
  console.log('express服务已启动！~  ');
});
app.get('/', (request: Request, response: Response) => {
  response.send('你好，这里是get方法的response方法的send方法返回的信息！');
});

const data = [
  {
    id: 1,
    title: '军歌',
    content: '向前向前向前。。',
  },
  {
    id: 2,
    title: '军服',
    content: '87式，99式，07式',
  },
  {
    id: 3,
    title: '军帽',
    content: '大檐帽、作训帽、贝雷帽',
  },
];

app.get('/posts', (request: Request, response: Response) => {
  response.send(data);
});

app.get('/posts/:postId', (request: Request, response: Response) => {
  const { postId } = request.params;
  const posts = data.filter(item => item.id == parseInt(postId, 10));

  response.send(posts[0]);
});

/*
创建内容
*/
app.post('/posts', (request, response) => {
  //获取请求里的链接
  const { content } = request.body;

  //设置响应状态码
  response.status(201);

  //输出请求头部数据
  console.log(request.headers['sing-along']);

  //设置服务端响应数据
  response.set('Sing-Along', 'This is a texture!');

  //做出相应
  response.send({
    message: `成功创建了内容：${content}`,
  });
});
