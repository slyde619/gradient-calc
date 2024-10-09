// Variable assignments
const form = document.querySelector("#form");
let firstInput = document.querySelector("#firstInput");
let secondInput = document.querySelector("#secondInput");
let operator = document.querySelector("#operator");
const calculateBtn = document.querySelector("#calculateBtn");
let resultEl = document.querySelector(".resultEl").childNodes[1];
console.log(resultEl)
let result;

// listen for a submit event
form.addEventListener("submit", function (event) {
  // Prevent page from reloading
  event.preventDefault();

  // Validate User Inputs
  if (firstInput.value === "" || secondInput.value === "") {
    alert("Input must be a number or must be filled");
  } else {
    // Convert input values to numbers
    let num1 = Number(firstInput.value);
    let num2 = Number(secondInput.value);

    // Perform calculation based on operator
    switch (operator.value) {
      case "add":
        result = num1 + num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "divide":
        result = num1 / num2;
        break;
      case "exponent":
        result = num1 ** num2;
        break;
      default:
        alert("Invalid operator");
        return;
    }

    // Display the result
    resultEl.innerHTML = result;
  }
});