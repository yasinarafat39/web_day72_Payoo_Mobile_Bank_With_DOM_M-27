// console.log("I am from login js")

document.getElementById("btnLogin").addEventListener("click", function (event) {
  event.preventDefault(); // stop form refreshing

  const phoneNumberField = document.getElementById("phoneNumber");
  const phoneNumber = phoneNumberField.value;
  const pinNumberField = document.getElementById("pinNumber");
  const pinNumber = pinNumberField.value;

  
  // can not submit empty form
  const inputs = document.querySelectorAll("input");

  if (inputs[0].value === "" || inputs[1].value === "") {
    alert("Phone number and PIN number cannot be empty");
  } else {
    // this is temporary
    if (phoneNumber === "01817482739" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = "/home.html";
    } else {
      alert("Please provide a valid Phone Number and Pin");
    }

    phoneNumberField.value = "";
    pinNumberField.value = "";
  } 
});
