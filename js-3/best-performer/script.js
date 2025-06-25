const form = document.getElementById("scoreForm");
const resultList = document.getElementById("resultList");
const resultBox = document.getElementById("resultBox");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submit");
  const scores = [];
  const rows = Array.from(form.querySelectorAll(".row"));
  rows.forEach(function (row, index) {
    const inputs = row.querySelectorAll("input");
    const name = inputs[0].value.trim();
    const score = parseFloat(inputs[1].value.trim());
    if (name && score) {
      scores.push({ name: name, score: score });
    }
  });
  console.log("scores", scores);
  scores.sort(function (a, b) {
    return b.score - a.score;
  });
  console.log("scores", scores);

  resultList.innerHTML = "";
  scores.forEach(function (scoreItem, index) {
    const li = document.createElement("li");
    li.textContent = `${scoreItem.name} - ${scoreItem.score}`;
    if (index === 0) li.classList.add("top");

    resultList.appendChild(li);
  });

  resultBox.classList.remove("hidden");
});
