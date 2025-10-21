// La fecha objetivo para el inicio de las Jornadas (15 de Noviembre de 2025)
const targetDate = new Date("November 15, 2025 08:00:00").getTime();

// Función principal para actualizar el contador
function updateCountdown() {
    // Obtener la fecha y hora de hoy
    const now = new Date().getTime();

    // Encontrar la distancia entre ahora y la fecha objetivo
    const distance = targetDate - now;

    // Cálculos de tiempo en días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatear los números para que siempre tengan dos dígitos (ej. 05 en lugar de 5)
    const pad = (num) => (num < 10 ? '0' + num : num);

    // Mostrar el resultado en los elementos con IDs
    document.getElementById("days").innerHTML = pad(days);
    document.getElementById("hours").innerHTML = pad(hours);
    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerHTML = pad(seconds);

    // Si la cuenta regresiva termina
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>¡Las Jornadas han comenzado!</h2>";
    }
}

// Inicializar el contador inmediatamente
updateCountdown();

// Actualizar el contador cada 1 segundo (1000 milisegundos)
const countdownInterval = setInterval(updateCountdown, 1000);