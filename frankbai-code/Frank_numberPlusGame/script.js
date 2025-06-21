let counts = 0;
const maxCount = 10;
const hints = document.getElementById("hints");
const btnAdd = document.getElementById("btnAdd");
const btnReset = document.getElementById("btnReset");
const countsDisplay = document.getElementById("counts");

let rColor = 125;
let gColor = 0;
let bColor = 255;

btnAdd.addEventListener("click", function () {
  counts++;
  countsDisplay.textContent = counts;

  if (counts < 7) {
    rColor = rColor + 125;
    gColor = gColor + 50;
    bColor = bColor + 25;

    if (rColor > 255) rColor = 0;
    if (gColor > 255) gColor = 0;
    if (bColor > 255) bColor = 0;
    countsDisplay.style.color = `rgb(${rColor}, ${gColor}, ${bColor})`;
    // countsDisplay.style.color = "rgb(rColor, gColor, bColor)";
  } else {
    countsDisplay.style.color = "red";
  }

  if (counts < 10) {
    hints.textContent = "You can add numbers";
    btnAdd.disabled = false;
  } else {
    hints.textContent = "You reached the maximum number!";
    btnAdd.disabled = true;
  }
});

btnReset.addEventListener("click", function () {
  counts = 0;
  countsDisplay.textContent = 0;
  countsDisplay.style.color = "blue";
  btnAdd.disabled = false;
  hints.textContent = "reset to play again";
});
