document
  .getElementById("btnShowAddMoney")
  .addEventListener("click", function () {
    showSectionById("addMoneyForm");

    // show divider
    document.getElementById("devider").innerText = "Add Money";
  });

// show the cash out form
document
  .getElementById("btnShowCashOut")
  .addEventListener("click", function () {
    showSectionById("cashOutForm");

    // show divider
    document.getElementById("devider").innerText = "Cash Out";
  });

// show the Transaction section
document
  .getElementById("btnTransaction")
  .addEventListener("click", function () {
    showSectionById("transactionSection");

     // show divider
     document.getElementById("devider").innerText = "Transactions";
  });
