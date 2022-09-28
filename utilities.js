function updateProuductNumber(isIncrease, elementId) {
  const productNumberField = document.getElementById(elementId);
  const productNumber = parseInt(productNumberField.value);

  let newproductNumber;
  if (isIncrease === true) {
    newproductNumber = productNumber + 1;
  } else {
    newproductNumber = productNumber - 1;
  }
  productNumberField.value = newproductNumber;
  return newproductNumber;
}

function setTextElementById(id, value) {
  const textElement = document.getElementById(id);
  textElement.innerText = value;
}

function updateProductTotalPrice(newProductNumber, elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  if (elementId === "phone_total_amount") {
    const total = newProductNumber * 1219;
    setTextElementById(elementId, total);
  } else {
    const total = newProductNumber * 59;
    setTextElementById(elementId, total);
  }
}
function getTextElementValue(elementId) {
  const element = document.getElementById(elementId);
  const currentTotal = parseInt(element.innerText);
  return currentTotal;
}
function calcSubTotal() {
  const phoneTotal = getTextElementValue("phone_total_amount");
  const caseTotal = getTextElementValue("case_total_amount");

  const subtotalAmount = phoneTotal + caseTotal;
  setTextElementById("sub_total", subtotalAmount);

  const taxAmount = parseFloat((subtotalAmount * 0.1).toFixed(2));
  setTextElementById("tax", taxAmount);

  const finalAmount = subtotalAmount + taxAmount;
  setTextElementById("final_total", finalAmount);
}
