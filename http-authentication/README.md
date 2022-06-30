# overview
http authentication工作原理

# 执行
node index.js

# browser
- 访问http://localhost:3000
- 如果没有权限，页面会提示输入用户名和密码，用户为123，密码为1
- 输入账号和密码后，页面会再发起一个请求，并且header带有authorization
- 授权后，访问http://localhost:3000，header都会带上authorization

# 缺点
- 用户和密码明文传输不安全
- 对于安全要求不高，公司内部环境可考虑使用
- 不能注销凭证