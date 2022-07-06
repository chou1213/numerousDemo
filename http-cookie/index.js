const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs');

app.get("/", async (req, res) => {
  for(let i = 0; i < 100; i++){
    res.cookie(`token${i}`, '1');
  }
  
  var data = fs.readFileSync("./public/index.html", "utf-8");
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
