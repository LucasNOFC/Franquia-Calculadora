const form = document.querySelector("#form");
const inputValues = document.querySelectorAll(".inputValues");
const calculatorContainer = document.querySelector(".calculator-container");

let fipeValue = 0;
let percentage = 0;
let franchise = 0;

const calculator = (value, percentage) => {
  return (value / 100) * percentage;
};

inputValues.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.id == "FipeValue") fipeValue = parseFloat(input.value);
    else if (input.id == "percentageF") percentage = parseFloat(input.value);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  franchise = calculator(fipeValue, percentage);
  const franchiseResultContainer = document.createElement("div");
  const franchiseResult = document.createTextNode(`R$:${franchise.toFixed(2)}`);

  franchiseResultContainer.appendChild(franchiseResult);
  franchiseResultContainer.classList.add("franchise-result-container");
  if (franchise > 0) calculatorContainer.appendChild(franchiseResultContainer);
});
 