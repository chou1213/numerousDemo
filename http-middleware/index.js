const express = require("express");
const app = express();
const port = 3000;
const userRouter = require('./router/user'); // /user的路由配置文件

// 给/user路径安装中间件函数，改中间函数
/**
 * 给/user路径安装中间件函数
 * 当用户访问/user时，会调用userRouter中间件函数
 * userRouter相当于一个路由中间件函数
 * 通过postman访问http://localhost:3000/user/, 控制台会执行第一个中间件函数打印请求时间，并把控制权交给handler
 * 通过postman访问http://localhost:3000/user/about, 控制台会执行第一个中间件函数打印请求时间，并把控制权交给handler
 */
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
