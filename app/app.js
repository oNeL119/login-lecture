"use strict";

//모듈
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//라우팅
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

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