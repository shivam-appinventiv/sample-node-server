const http = require('http');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080 ;

console.log('PORT',PORT);

app.get('/',(req,res)=> res.send(`Hello world v2 ${req.socket.remoteAddress} on port : ${PORT}`));

// comment added on prod branch
//1
app.listen(PORT,()=>{
  console.log(`Example app listening at http://localhost:${PORT}`);
})

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
//

// server.listen(port, () => {
//   console.log(`Server running on port :${port}`);
// });
//
//
//
