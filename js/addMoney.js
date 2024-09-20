document
  .getElementById("addMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("addMoneyInput");
    const pinNumber = getInputFieldValueById("pinNumber");
    const currentBalance = getTextFieldValueById("currentAmount");

    // validation
    if (!addMoney || !pinNumber) {
      alert("Amount or PIN cannot be empty");
    } else {
      // verify pin number and phone number
      if (pinNumber === 1234) {
        if (addMoney > 0) {
          const newBalance = currentBalance + addMoney;
          document.getElementById("currentAmount").innerText = newBalance;

          //   reset form
          document.getElementById("addMoneyInput").value = "";
          document.getElementById("pinNumber").value = "";

          // add to transaction history
          const p = document.createElement('p');
          p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`
          console.log(p);
          // should be a common function
          document.getElementById('transactionContainer').appendChild(p);

        } else {
          alert("Please provide a valid amount.");
        }
      } else {
        alert("Incurrect PIN");
      }
    }

    console.log(addMoney, pinNumber, currentBalance);
  });
