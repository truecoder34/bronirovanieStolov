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

app.listen(7099);
console.log("run at 7099");
