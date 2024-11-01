import "./style.css";

const input = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const result = document.querySelector("#results-div");

function isValidNumber(str) {
  var regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?(\d{3}[\s-]?\d{4}$)/;
  return regex.test(str);
}

checkBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please provide a phone number");
  } else if (isValidNumber(input.value)) {
    result.innerHTML = `Valid US number:<br>${input.value}`;
    input.value = "";
  } else {
    result.innerHTML = `Invalid US number:<br>${input.value}`;
    input.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  result.innerText = "";
});

input.addEventListener("focus", () => {
  result.innerText = "";
});
