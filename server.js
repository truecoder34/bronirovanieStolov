var mysql = require("mysql"); // подключаем модуль mysql
var express = require("express"); // подключаем модуль express (http сервер)
app = express();
var bodyParser = require("body-parser");
var fs = require("fs"); // Подключили бибилиотеку-модуль для работы с файлами
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(__dirname)); // Путь относительно которого нудно искать наши файлы. Задаем папку в которой искать файлики

// Непосредственно блок подсоединения базы данных sql
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
/*-----Конец блока подкдючения к sql------*/

/*----Блок подключения непосредственно к нашей базе данных по назанию orders :
  "use orders" - указываем что работаем с этой базой данных----------*/
con.query("use orders", function (err, result) {
    if (err) throw err;
    console.log("use ok"); // выводим сообщение в консоль, что все хорошо  и к базе данных подключилось
  });
/*----Конец блока подключения----------*/

/*------реакция на get запрос. Обращаемся к самому сайту и послыаем пользователю нашу верстку.
Делаем это чтобы на сайте прогрузилась вся наша верстка------*/
app.get("/", function(req,res){
  res.setHeader("Content-Type","text/html");
  res.sendFile(__dirname +"/bronirovanie.html");
})
/*------Конец этого блока------*/

/*-----Реализуем получение данных о клиенете с сайта (форм для ввода) на сервак. А с сервака идет в sql базу данных-----*/
app.post("/order", function(req,res){
 var number =  req.body.number1 + req.body.number2 +req.body.number3 + req.body.number4;
   /*обращаемся к базе данных, посылая запрос на вставку записис в базу.
   Сначала прописываем поля, куда вставить, потом непосредственно значения для вставки */
   con.query("INSERT INTO orders (stol,time,name, surname, number) VALUES( \""+ req.body.tableNumber +"\",\""+ req.body.timeOfOrder +"\",\""
   + req.body.name +"\",\""  + req.body.surname +"\",\"" + number + "\");", function(err, result) {
     if (err) throw err;
     console.log("INSERT ok");
   });
})
/*------Конец этого блока------*/
var indicator;
var massivOfOrders; // ассоциативный массив, который будет хранить информацию о столах полученную с базы данных
/*-------Получаем пост запрос с клиента и отвечаем на него
Каждый раз получаем значения при изменении слайдеров с этих слайдеров
И отсылаем ответ на сайт-------*/
app.post("/getAvailableTables", function(req,res){
  // console.log(req.body.peopleCount);
  // console.log(req.body.time);
  con.query("SELECT * FROM orders", function (err, result) {
    if (err) throw err;

    var massivOfOrders = {1:2, 2:6, 3:6, 4:2, 5:4, 6:4, 7:4, 8:2, 9:6, 10:6}; // ассоциативный массив, который будет хранить статичискую  о столах и их вместимости

  // Убираем неподходящие столы по количеству человек, во-первых. В массве massivOfOrders оставляем только номера столов, что подходят
    if (req.body.peopleCount >= 3){
      delete massivOfOrders[1];
      delete massivOfOrders[4];
      delete massivOfOrders[8];
    }
    else if (req.body.peopleCount >= 5){
      delete massivOfOrders[1];
      delete massivOfOrders[4];
      delete massivOfOrders[8];
      delete massivOfOrders[5];
      delete massivOfOrders[6];
      delete massivOfOrders[7];
    }

    //Продолжаем сортировку по времени
    //Для всех заказов из базы данных
    result.forEach(function(el){
      //извлечь номер стола и время на которое он заказан
      var number = parseInt(el.stol.split(" ")[1]);
      var time = el.time;
          //Если этот номер есть в massivOfOrders и  время совпадает  с тем что пришло
          var buffer1 = parseInt(time.split(":")[0]) * 60; //преобразовываем часы в минуты (полученое из базы данных)
          var buffer2 = parseInt(time.split(":")[1]);
          var timeFromSql = buffer1 + buffer2; // складываем часы и митнуты получаем число

          // переводим время, пришедшее с сайта в минуты
          var buffer3 = parseInt(req.body.time.split(":")[0]) * 60;
          var buffer4 = parseInt(req.body.time.split(":")[1]);
          var timeFromSite = buffer3 + buffer4;
          // console.log("timeSQL = " + timeFromSql.toString() + "  timeSite " + timeFromSite.toString());
          if (number in massivOfOrders && (( timeFromSite - timeFromSql ) <= 120 && ( timeFromSite - timeFromSql ) >= -120)) {
            //то удалить из massivOfOrders данный стол
            delete massivOfOrders[number];
          }
    })

    res.end(JSON.stringify(massivOfOrders));
  });
  // var resultec = result[0].id + ";" + result[0].stol+ ";" + result[0].time;
})

app.listen(7099);
console.log("run at 7099");
