let hora = document.querySelector('.hour-hand');
let minuto = document.querySelector('.min-hand');
let segundo = document.querySelector('.second-hand');

function girarPonteiros() {
    let date = new Date();
    let pack = {
        hora: date.getHours(),
        minuto: date.getMinutes(),
        segundo: date.getSeconds()
    }
    /*
    Hora = 15 Graus
    Minutos = 3 Graus
    Segundos = 3 Graus
    */
   hora.style.transform = `rotate(${pack.hora > 12 ? ((pack.hora - 12) * 30) + 90  : (((pack.hora) * 30) + 90)}deg)`;
   minuto.style.transform = `rotate(${((pack.minuto) * 6) + 90}deg)`;
   segundo.style.transform = `rotate(${((pack.segundo) * 6) + 90}deg)`;
}

window.setInterval(girarPonteiros, 1000);