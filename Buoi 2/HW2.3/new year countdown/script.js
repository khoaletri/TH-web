function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);
    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('nextYear').innerHTML = `Time until 1 January, ${currentYear + 1}`;
    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initialize the countdown