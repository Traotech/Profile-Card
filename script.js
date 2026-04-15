const timeElement = document.getElementById("user-time");

function updateTime() {
  const now = Date.now();
  timeElement.textContent = `Current time (ms): ${now}`;
}

// Initial call
updateTime();

// Update every second (1000ms)
setInterval(updateTime, 1000);