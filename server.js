var express = require("express");
app = express();
var bodyParser = require("body-parser");
var fs = require("fs"); // Подключили бибилиотеку-модуль для работы с файлами
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
  var text = 'name = ' + req.body.name + '\nsurname = ' + req.body.surname +
  '\nnumber = ' + req.body.number1 + req.body.number2 +
   req.body.number3 + req.body.number4 + "\n" + req.body.tableNumber + "\n" + req.body.timeOfOrder;
   //Записываем данные полученныйе с сайта в файл
   //Каждая новая бронь на сайте записывается в конец файла текстового при помощи функции appendFile из бибилиотеки fs
   // 1 аргумент - имя файла, 2 - записываемый текст, 3 функция, которая вызовется при ошибке при записи
  fs.appendFile("orders.txt",text, function(err){
    if (err)
      console.log('Obosrantus pri zapisiy v fail');
  });
})

app.listen(7099);
console.log("run at 7099");
