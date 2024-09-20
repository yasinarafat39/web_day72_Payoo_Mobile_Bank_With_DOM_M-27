document
  .getElementById("cashOutBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById("cashOutInputAmount");
    const pinNumber = getInputFieldValueById("cashOutpinNumber");
    const currentBalance = getTextFieldValueById("currentAmount");

    // validate
    if (!cashOut || !pinNumber) {
      alert("Amount or PIN cannot be empty");
    } else {
      // verify pin number and phone number
      if (pinNumber === 1234) {
        if (cashOut > 0) {
          // calculate cash out
          const newBalance = currentBalance - cashOut; 
          document.getElementById('currentAmount').innerText = newBalance;

          //   reset form
          document.getElementById("cashOutInputAmount").value = "";
          document.getElementById("cashOutpinNumber").value = "";


          // add to transaction history
          const div = document.createElement('div');
          div.classList.add('bg-yellow-300');
          div.innerHTML = `
            <h4 class="text-2xl font-bold p-3">Cash Out:</h4>
            <p>${cashOut} withdraw. New Balance ${newBalance}</p>
          ` 
          // should be a common function
          document.getElementById('transactionContainer').appendChild(div);

          
        } else {
          alert("Please provide a valid amount.");
        }
      } else {
        alert("Incurrect PIN");
      } 
    }

    console.log(cashOut, pinNumber, currentBalance);
  });
