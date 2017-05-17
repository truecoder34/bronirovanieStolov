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
