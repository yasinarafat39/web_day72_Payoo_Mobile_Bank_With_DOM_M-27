// show the cash out form
document
  .getElementById("btnShowCashOut")
  .addEventListener("click", function () {
    // show cash out button clicked
    console.log("show cash out button clicked");

    const cashOutForm = document.getElementById("cashOutForm");
    cashOutForm.classList.remove("hidden");

    const addMoneyForm = document.getElementById("addMoneyForm");
    addMoneyForm.classList.add("hidden");


     // show divider
     const addMoneyDevider = document.getElementById("addMoneyDevider");
     addMoneyDevider.classList.add("hidden");
 
     const cashOutDevider = document.getElementById("cashOutDevider");
     cashOutDevider.classList.remove("hidden");
  });

document
  .getElementById("btnShowAddMoney")
  .addEventListener("click", function () {
    console.log("show Add money button clicked");

    const addMoneyForm = document.getElementById("addMoneyForm");
    addMoneyForm.classList.remove("hidden");

    const cashOutForm = document.getElementById("cashOutForm");
    cashOutForm.classList.add("hidden");

    // show divider
    const addMoneyDevider = document.getElementById("addMoneyDevider");
    addMoneyDevider.classList.remove("hidden");

    const cashOutDevider = document.getElementById("cashOutDevider");
    cashOutDevider.classList.add("hidden");
  });
