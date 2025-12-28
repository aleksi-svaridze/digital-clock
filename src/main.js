const hoursContainer = document.querySelector("#hours");
const minutesContainer = document.querySelector("#minutes");
const secondsContainer = document.querySelector("#seconds");

function updateClock() {
  const currentTime = new Date();

  hoursContainer.innerHTML = currentTime.getHours().toString().padStart(2, "0");
  minutesContainer.innerHTML = currentTime
    .getMinutes()
    .toString()
    .padStart(2, "0");
  secondsContainer.innerHTML = currentTime
    .getSeconds()
    .toString()
    .padStart(2, "0");
}

setInterval(() => {
  updateClock;
}, 1000);
updateClock();
