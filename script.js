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
  $("#myModal").modal('show');
  $('.modal-title').html('Заказать ' + $(this).html());
});

// Код реаигирующий на нажатие кнопки подтвердить
$(document).on('click', '#Confirmation', function() {
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
  }

  var surname = $('#ClientSurname').val();
  if (nameRegexp.test(surname) == 0) {
    alert("Поле \"Фамилия\" введено неверено");
    $('#ClientSurname').val(''); // Очищаем  поле при помощи метода val
  }

  var num1 = $('#ClientNumber1').val();
  if (number1.test(num1) == 0) {
      alert("Первое поле телефонного номера введено неверено");
      $('#ClientNumber1').val(''); // Очищаем  поле при помощи метода val
  }

  var num2 = $('#ClientNumber2').val();
  if (number2.test(num2) == 0) {
      alert("Второе поле телефонного номера введено неверено");
      $('#ClientNumber2').val(''); // Очищаем  поле при помощи метода val
  }

  var num3 = $('#ClientNumber3').val();
  if (number34.test(num3) == 0) {
      alert("Третье поле телефонного номера введено неверено");
      $('#ClientNumber3').val(''); // Очищаем  поле при помощи метода val
  }

  var num4 = $('#ClientNumber4').val();
  if (number34.test(num4) == 0) {
      alert("Четвертое поле телефонного номера введено неверено");
      $('#ClientNumber4').val(''); // Очищаем  поле при помощи метода val
  }

  // Очищаем все поля при помощи метода val, который если получает что то в скобках, то НЕ ВОЗВРАЩАЕТ ЗНАЧЕНИЕ, а ПЕРЕНАЗНАЧАЕТ
  // $('#ClientName').val('');
  // $('#ClientSurname').val('');
  // $('#ClientNumber1').val('');
  // $('#ClientNumber2').val('');
  // $('#ClientNumber3').val('');
  // $('#ClientNumber4').val('');

});
