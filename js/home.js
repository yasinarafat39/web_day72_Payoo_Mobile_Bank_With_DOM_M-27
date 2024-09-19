
// Add money to the account

document.getElementById("addMoneyBtn").addEventListener('click', function(event){
    event.preventDefault();
    // console.log('add money clicked')

    // step-1: 

    // input money for add
    const addMoneyInputField = document.getElementById('addMoneyInput');
    const addMoneyInputValue = parseFloat(addMoneyInputField.value);
    
    
    // pin number
    const pinNumberField = document.getElementById('pinNumber');
    const pinNumberValue = pinNumberField.value;
    

    // get current amount
    const currentAmountField = document.getElementById('currentAmount');
    const cureentAmount = parseFloat(currentAmountField.innerText);


    // verify pin number
    if(pinNumberValue === "12345"){
        if(addMoneyInputValue > 0){
            const newBalance = cureentAmount + addMoneyInputValue; 
            currentAmountField.innerText = newBalance;
        } else{
            alert("Please provide a valid amount.")
        }
    } else{
        alert("Incurrect PIN");
    }

    console.log(addMoneyInputValue, pinNumberValue, cureentAmount)
    addMoneyInputField.value = '';
    pinNumberField.value = '';
})