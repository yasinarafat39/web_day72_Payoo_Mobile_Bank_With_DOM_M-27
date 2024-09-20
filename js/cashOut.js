document
  .getElementById("cashOutBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // current balance
    const currentAmountField = document.getElementById("currentAmount");
    const currentBalance = parseFloat(currentAmountField.innerText);

    // cash out amount
    const cashOutAmountField = document.getElementById("cashOutInputAmount");
    const cashOutAmout = parseFloat(cashOutAmountField.value);

    // cash out pin
    const cashOutPinField = document.getElementById("cashOutpinNumber");
    const cashOutPin = cashOutPinField.value;

    // validate Pin number
    if (cashOutAmout === "" || cashOutPin === "") {
      alert("Amount or PIN cannot be empty");
    } else {
      // verify pin number and phone number
      if (cashOutPin === "12345") {
        if (cashOutAmout > 0) {
          // calculate cash out
          const newBalance = currentBalance - cashOutAmout;
          currentAmountField.innerText = newBalance;
        } else {
          alert("Please provide a valid amount.");
        }
      } else {
        alert("Incurrect PIN");
      }

      cashOutAmountField.value = "";
      cashOutPinField.value = "";
    }
});
