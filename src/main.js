const hoursContainer = document.querySelector("#hours");
const minutesContainer = document.querySelector("#minutes");
const secondsContainer = document.querySelector("#seconds");

function updateClock() {
  const currentTime = new Date();

  let hours = currentTime.getHours().toString().padStart(2, "0");
  let minutes = currentTime.getMinutes().toString().padStart(2, "0");
  let seconds = currentTime.getSeconds().toString().padStart(2, "0");

  hoursContainer.textContent = hours;
  minutesContainer.textContent = minutes;
  secondsContainer.textContent = seconds;
}

setInterval(() => {
  updateClock();
}, 1000);
