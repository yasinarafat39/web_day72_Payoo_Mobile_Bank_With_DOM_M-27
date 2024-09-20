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
