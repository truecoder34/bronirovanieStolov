function peopleCount() {
    var count = document.getElementById('sliderCount').value;    // получаем значение бегунка
    var slider = document.getElementById('count');
    slider.innerHTML = count;
}

function getTime() {
    var minutes = (document.getElementById('time').value)%100;  // получаем минуты
    var time = (document.getElementById('time').value)/100; // получаем часы и минуты в начальном формате
    var hours = parseInt(time); // получаем часы
    var clock = document.getElementById('clock');
    if(minutes >= 60 || minutes == 0) {
        hours += 1;
        clock.innerHTML = hours + ':' + '00';
    } else {
        clock.innerHTML = hours + ':' + minutes;
    }
}
