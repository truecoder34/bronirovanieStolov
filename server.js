var express = require("express");
app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(__dirname)); // Путь относительно которого нудно искать наши файлы. Задаем папку в которой искать файлики


app.get("/", function(req,res){
  res.setHeader("Content-Type","text/html");
  res.sendFile(__dirname +"/bronirovanie.html");
})

// Реализуем получение данных о клиенете с сайта на сервак
app.post("/order", function(req,res){
  console.log('name = ' + req.body.name + '\n surname = ' + req.body.surname + '\n number = ' + req.body.number1 + req.body.number2 + req.body.number3 + req.body.number4);
})

app.listen(7099);
console.log("run at 7099");
