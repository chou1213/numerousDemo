const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs');

app.get("/", async (req, res) => {
  const { authorization } = req.headers;
  console.log('===', authorization);

  // 判断header是否存在authorization
  if (authorization) {
    // 如果存在，则校验base64的用户和密码是否如何预期，是返回html，否则返回403无访问权限
    const base64 = authorization.replace('Basic ','');
    const [usrname, passwd] = Buffer.from(base64, 'base64').toString().split(':');
    console.log(Buffer.from(base64, 'base64').toString().split(':'));
    if(usrname === '123' && passwd === '1'){
      var data = fs.readFileSync("./public/index.html", "utf-8");
      res.send(data);
    }else{
      res.status(403).send('403 Forbidden');
    }
  } else {
    // 如果不存在，则返回401无授权
    res.append('WWW-Authenticate', 'Basic');
    res.status(401).end();
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
