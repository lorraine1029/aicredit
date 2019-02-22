const path = require("path")
const express = require("express")
const app = express()

app.use(express.static(__dirname))

app.get("/api/carts",(req,res)=>{
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  res.json(require("./src/jsonData/data"))
})


app.get("/",(req,res)=>{
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  res.sendFile(path.join(__dirname,"index.html"))
})




app.listen(3000,(err)=>{
  console.log("shop-server is starting on port 3000")
})
