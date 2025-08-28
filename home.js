let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearButton = document.querySelector(".clear-history");

const heartButtons = document.querySelectorAll(".heart-btn");
const copyButtons = document.querySelectorAll(".copy-btn");
const callButtons = document.querySelectorAll(".call-btn");

// Heart Button
heartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    heartCount++;
    heartDisplay.textContent = heartCount;
  });
});

// Copy Button
copyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.parentElement.parentElement;
    const number = card.getAttribute("data-number");
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);
    copyCount++;
    copyDisplay.textContent = copyCount;
  });
});
