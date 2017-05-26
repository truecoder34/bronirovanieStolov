/*вызвалось событие change у элмента по id sliderCount.
 в функцию func был передан указатель this на этот слайдер,
а у него есть функция val, которая возвращает значение*/
$(document).on('change', '#sliderCount', function() {
  alert("SOSEM");
  alert($(this).val());
});

$(document).on('change', '#time', function() {
  alert("SOSEM2");
  alert($('#clock').html()); // .html - функция получения текста выводимого справа от бегунка
});

// РЕАЛИЗУЕМ ВЫПАДАЮЩЕЕ ОКОШЕЧКО
$(document).on('click', '.mytable', function(){
  $("#tableNumber").val($(this).html()); // При нажатии на объект с классом .mytable занести в невидимое поле по айди #tableNumber заносим текстовое наполнение нашего стола "Стол.."
  $("#timeOfOrder").val($('#clock').html()); // заносим в невидимое поле с айди #timeOfOrder время считаное из слайдера по айди #clock
  $("#myModal").modal('show');
  $('.modal-title').html('Заказать ' + $(this).html());
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

  // Очищаем все поля при помощи метода val, который если получает что то в скобках, то НЕ ВОЗВРАЩАЕТ ЗНАЧЕНИЕ, а ПЕРЕНАЗНАЧАЕТ
  // $('#ClientName').val('');
  // $('#ClientSurname').val('');
  // $('#ClientNumber1').val('');
  // $('#ClientNumber2').val('');
  // $('#ClientNumber3').val('');
  // $('#ClientNumber4').val('');

});
