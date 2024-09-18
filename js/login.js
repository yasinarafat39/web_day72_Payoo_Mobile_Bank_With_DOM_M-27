// console.log("I am from login js")

document.getElementById('btnLogin').addEventListener('click', function(event){
    event.preventDefault(); // stop form refreshing 
    console.log('login button clicked')


    const phoneNumberField = document.getElementById('phoneNumber');
    console.log(phoneNumberField.value)
})