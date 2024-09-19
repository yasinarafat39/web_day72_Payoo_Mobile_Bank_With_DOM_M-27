// console.log("I am from login js")

document.getElementById("btnLogin").addEventListener("click", function (event) {
  event.preventDefault(); // stop form refreshing

  const phoneNumberField = document.getElementById("phoneNumber");
  const phoneNumber = phoneNumberField.value;
  const pinNumberField = document.getElementById("pinNumber");
  const pinNumber = pinNumberField.value;
  console.log(phoneNumber, pinNumber);

  // this is temporary
  if (phoneNumber === "01817482739" && pinNumber === "12345") {
    console.log("you are logged in");
    window.location.href = "/home.html";
  } else {
    alert("Please provide a valid Phone NUmber and Pin");
  }

  phoneNumberField.value = "";
  pinNumberField.value = "";
});
