
// Add money to the account

document.getElementById("addMoneyBtn").addEventListener('click', function(event){
    event.preventDefault();
    // console.log('add money clicked')

    // step-1: 

    // input money for add
    const addMoneyInput = document.getElementById('addMoneyInput');
    const addMoneyInputValue = Number(addMoneyInput.value);
    
    
    // pin number
    const pinNumber = document.getElementById('pinNumber');
    const pinNumberValue = pinNumber.value;
    
    console.log(addMoneyInputValue, pinNumberValue)
    addMoneyInput.value = '';
    pinNumber.value = '';
})