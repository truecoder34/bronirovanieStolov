/*вызвалось событие change у элмента по id sliderCount.
 в функцию func был передан указатель this на этот слайдер,
а у него есть функция val, которая возвращает значение*/
$(document).on('change', '#sliderCount', function() {
//на сервер посылаем пост запрос на сервер, чтобы получить данные без обновления всей старницы
//указываем в скобках путь пост запроса, и js объект в свойство которому записываем количество человек, и время
//ТУТ AJAX делаем
  $.post("/getAvailableTables", {
      peopleCount: $("#count").html(),
      time : $("#clock").html()
    },
    function(data) {// функция, которая вполнится когда сервер пришлет ответ, и в этой функции хранится ТО ЧТО ПРИСЛАЛ СЕРВЕР
      var tables = (JSON.parse(data)); // с сервера Пришли номера всех доступных столов в формате json, распаршеваем их и в переменную
      // Проходим по всем айдишкам стоов и присваиваем им класс reserved
      $("#table1").addClass("reserved");
      $("#table1").removeClass("free");
      $("#table2").addClass("reserved");
      $("#table2").removeClass("free");
      $("#table3").addClass("reserved");
      $("#table3").removeClass("free");
      $("#table4").addClass("reserved");
      $("#table4").removeClass("free");
      $("#table5").addClass("reserved");
      $("#table5").removeClass("free");
      $("#table6").addClass("reserved");
      $("#table6").removeClass("free");
      $("#table7").addClass("reserved");
      $("#table7").removeClass("free");
      $("#table8").addClass("reserved");
      $("#table8").removeClass("free");
      $("#table9").addClass("reserved");
      $("#table9").removeClass("free");
      $("#table10").addClass("reserved");
      $("#table10").removeClass("free");
      // потом тем номерам столов, что пришли с сервака присваиваем доступность
      Object.keys(tables).forEach(function(el){
        $("#table" + el.toString()).removeClass("reserved");
        $("#table" + el.toString()).addClass("free"); /*!!!maybe true maybe not!!!*/
      })
    }
  );
});
// и ТУТ AJAX делаем
$(document).on('change', '#time', function() {
  $.post("/getAvailableTables", {
      peopleCount: $("#count").html(),
      time : $("#clock").html()
    },
    function(data) { // функция, которая вполнится когда сервер пришлет ответ, и в этой функции хранится ТО ЧТО ПРИСЛАЛ СЕРВЕР
      var tables = (JSON.parse(data)); // с сервера Пришли номера всех доступных столов в формате json, распаршеваем их и в переменную
      // Проходим по всем айдишкам стоов и присваиваем им класс reserved
      $("#table1").addClass("reserved");
      $("#table1").removeClass("free");
      $("#table2").addClass("reserved");
      $("#table2").removeClass("free");
      $("#table3").addClass("reserved");
      $("#table3").removeClass("free");
      $("#table4").addClass("reserved");
      $("#table4").removeClass("free");
      $("#table5").addClass("reserved");
      $("#table5").removeClass("free");
      $("#table6").addClass("reserved");
      $("#table6").removeClass("free");
      $("#table7").addClass("reserved");
      $("#table7").removeClass("free");
      $("#table8").addClass("reserved");
      $("#table8").removeClass("free");
      $("#table9").addClass("reserved");
      $("#table9").removeClass("free");
      $("#table10").addClass("reserved");
      $("#table10").removeClass("free");
      // потом тем номерам столов, что пришли с сервака присваиваем доступность
      Object.keys(tables).forEach(function(el){
        $("#table" + el.toString()).removeClass("reserved");
        $("#table" + el.toString()).addClass("free"); /*!!!maybe true maybe not!!!*/
      })
    }
  );
});


// РЕАЛИЗУЕМ функционал ВЫПАДАЮЩЕго ОКОШЕЧКО
$(document).on('click', '.mytable', function() {
  //Проверка на то, присвоен ли столу, на который мы жмем класс free в стилях, говорящий о том что он доступен
  if ($(this).hasClass("free")) {
    $("#tableNumber").val($(this).html()); // При нажатии на объект с классом .mytable занести в невидимое поле по айди #tableNumber заносим текстовое наполнение нашего стола "Стол.."
    $("#timeOfOrder").val($('#clock').html()); // заносим в невидимое поле с айди #timeOfOrder время считаное из слайдера по айди #clock
    $("#myModal").modal('show');
    $('.modal-title').html('Заказать ' + $(this).html());
  }
});

// Код реаигирующий на нажатие кнопки подтвердить
// Подали в функцию, которая реагирует на нажатие перменную в которой хранится событие нажатия, с помощью этой переменной можно отменить это нажатие
// эта отмена при помощии метода preventDefault
$(document).on('click', '#Confirmation', function(e) {
  // Регулярки для каждого поля
  var nameRegexp = /^[A-ZА-Я][a-zа-я]+$/;
  var number1 = /^9[0-9]{2}$/;
  var number2 = /^[0-9]{3}$/;
  var number34 = /^[0-9]{2}$/;

  // Считываем с каждого поля, сверяем с регулрякой, если не верно выводым окно с ошибкой
  var name = $('#ClientName').val();
  if (nameRegexp.test(name) == 0) {
    alert("Поле \"Имя\" введено неверено");
    $('#ClientName').val(''); // Очищаем  поле при помощи метода val
    e.preventDefault(); // Если что то не верно введено - сработала валидация - мы обрываем пережачу на сервер
  }

  var surname = $('#ClientSurname').val();
  if (nameRegexp.test(surname) == 0) {
    alert("Поле \"Фамилия\" введено неверено");
    $('#ClientSurname').val(''); // Очищаем  поле при помощи метода val
    e.preventDefault();
  }

  var num1 = $('#ClientNumber1').val();
  if (number1.test(num1) == 0) {
    alert("Первое поле телефонного номера введено неверено");
    $('#ClientNumber1').val(''); // Очищаем  поле при помощи метода val
    e.preventDefault();
  }

  var num2 = $('#ClientNumber2').val();
  if (number2.test(num2) == 0) {
    alert("Второе поле телефонного номера введено неверено");
    $('#ClientNumber2').val(''); // Очищаем  поле при помощи метода val
    e.preventDefault();
  }

  var num3 = $('#ClientNumber3').val();
  if (number34.test(num3) == 0) {
    alert("Третье поле телефонного номера введено неверено");
    $('#ClientNumber3').val(''); // Очищаем  поле при помощи метода val
    e.preventDefault();
  }

  var num4 = $('#ClientNumber4').val();
  if (number34.test(num4) == 0) {
    alert("Четвертое поле телефонного номера введено неверено");
    $('#ClientNumber4').val(''); // Очищаем  поле при помощи метода val
    e.preventDefault();
  }

});

//при закгрузке страницы устанавливаем начальные значения времени и количества человек
  // A $( document ).ready() block.
$(document).ready(function() {
    $("#count").html('1')
    $("#clock").html('10:00')
});
