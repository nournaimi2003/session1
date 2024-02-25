// const httpServer = require('http');
// const server = httpServer.createServer(function(req,res){
//   if (req.url == "/" &&  req.method =="GET"){
//     res.end("Home")

//   }
//   // console.log(req.method, req.url):
// })
// server.listen(3000, function(){
//   console.log("server run")
// })
let users= [
  {name:"nour , age:33"},
  {name:"nour , age:33"},
  {name:"nour , age:33"},
  {name:"nour , age:33"},
  {name:"nour , age:33"},
]
  
const httpServer = require('http')
const fs = require("fs")
const html = fs.readFileSync('index.html')
const Server= httpServer.createServer(function (req,res){
  // res.end(JSON.stringify(users));
  // res.end( html)
  if ( req.url == "/adduser" && req.method == "POST"){
    req.on("data" , function (chunk){
      users.push(JSON.parse(chunk))
      console.log(JSON.parse(chunk))
      res.end(chunk);
    }) 

    // res.end("adduser");
  }
  else {
    res.end("404")
  }

})
Server.listen(3000, function(){
  console.log("run")
})