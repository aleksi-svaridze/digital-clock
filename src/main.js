const hoursContainer = document.querySelector("#hours");
const minutesContainer = document.querySelector("#minutes");
const secondsContainer = document.querySelector("#seconds");

setInterval(() => {
  const now = new Date();
  hoursContainer.innerHTML = now.getHours().toString().padStart(2, "0");
  minutesContainer.innerHTML = now.getMinutes().toString().padStart(2, "0");
  secondsContainer.innerHTML = now.getSeconds().toString().padStart(2, "0");
}, 1000);
