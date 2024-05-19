function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const targetDate = new Date(`May 18, ${currentYear} 00:00:00`);
    
    if (now.getMonth() === 4 && now.getDate() === 20) {
        document.getElementById('message').textContent = '¡Feliz Cumpleaños Karen!!!';
        document.getElementById('countdown').textContent = '';
        return; 
    } else {
        document.getElementById('message').textContent = 'Faltan:';
    }
    
    if (now > targetDate) {
        targetDate.setFullYear(currentYear + 1);
    }
    
    const timeDifference = targetDate - now;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown').textContent = `${days} días ${hours} horas ${minutes} minutos`;
}

setInterval(updateCountdown, 1000);

updateCountdown();
