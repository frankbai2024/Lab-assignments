let test = 1;
const btnUserInfo = document.getElementById("btnUserInfo");
const displayName = document.getElementById("userName");

btnUserInfo.addEventListener("click", function () {
  document.getElementById("btnUserInfo").style.display = "block";
  showPrompt();
});

function showPrompt() {
  document.getElementById("promptBox").style.display = "block";
}

function submitPrompt() {
  valueName = document.getElementById("userName").value;
  alert("You entered: " + valueName);
  valueAge = document.getElementById("userAge").value;
  valueAge = parseInt(valueAge, 10);
  valueAge = valueAge + 5;
  alert("You will be: " + valueAge + "in 5 years.");

  document.getElementById("promptBox").style.display = "none";

  displayName.textContent = "valueName";
  displayName.style.color = "blue";
  displayName.style.display = "block";
}
