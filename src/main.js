const hoursContainer = document.querySelector("#hours");
const minutesContainer = document.querySelector("#minutes");
const secondsContainer = document.querySelector("#seconds");

function updateClock() {
  const currentTime = new Date();

  const format = (value) => String(value).padStart(2, "0");

  hoursContainer.textContent = format(currentTime.getHours());
  minutesContainer.textContent = format(currentTime.getMinutes());
  secondsContainer.textContent = format(currentTime.getSeconds());
}

updateClock();
setInterval(updateClock, 1000);
