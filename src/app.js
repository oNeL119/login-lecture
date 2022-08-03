"use strict";

//모듈
const express = require('express');
const app = express();

const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

//라우팅
app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;




// HTTP로 서버 실행
// const http = require('http');
// const app = http.createServer((req, res) => {
//     if(req.url === "/"){
//         res.end("http root page");
//     }else if(req.url === "/login"){
//         res.end("login page");
//     }
// });

// app.listen(3001, () => {
//     console.log("http 서버 실행");
// });