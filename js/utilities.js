/**
 * Common shared function here
 */

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textvalue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textvalue);
  return textNumber;
}

function showSectionById(id) {
  // hide all the sections
  document.getElementById('addMoneyForm').classList.add('hidden');
  document.getElementById('cashOutForm').classList.add('hidden');
  document.getElementById('transactionSection').classList.add('hidden');

  // show the section with the provide id as parameter
  document.getElementById(id).classList.remove("hidden");
}
