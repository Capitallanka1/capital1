
const loanSlider = document.getElementById("loanSlider");
const loanAmountDisplay = document.getElementById("loanAmount");
const repaymentAmountDisplay = document.getElementById("repaymentAmount");

function updateAmounts() {
  const loanAmount = parseInt(loanSlider.value);
  const interestRate = 0.07;
  const repaymentAmount = loanAmount + (loanAmount * interestRate);

  loanAmountDisplay.textContent = loanAmount.toLocaleString();
  repaymentAmountDisplay.textContent = repaymentAmount.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

loanSlider.addEventListener("input", updateAmounts);
updateAmounts(); // Initial call
