// Definir la fecha objetivo (26 de septiembre de 2025, 21:30 hora Argentina)
const countDownDate = new Date("September 26, 2025 21:30:00").getTime();

// Actualizar la cuenta atrás cada segundo
const x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // Cálculos de días, horas, minutos y segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar la cuenta atrás en la página
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si la fecha ya pasó, mostrar un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);

// Función para recordatorio
function setReminder() {
    alert("¡Recordatorio agendado!");
}

// Función para mostrar/ocultar datos bancarios
document.getElementById('showButton').addEventListener('click', function() {
    var bankDetails = document.getElementById('bankDetails');
    
    // Cambiar el estado de visibilidad de los datos bancarios
    if (bankDetails.classList.contains('hidden')) {
        bankDetails.classList.remove('hidden');
        this.innerText = 'Ocultar Datos Bancarios';
    } else {
        bankDetails.classList.add('hidden');
        this.innerText = 'Ver Datos Bancarios';
    }
});
