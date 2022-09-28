document.getElementById("btn_case_plus").addEventListener("click", function () {
  const newCaseNumber = updateProuductNumber(true, "case_number");
  updateProductTotalPrice(newCaseNumber, "case_total_amount");
  calcSubTotal();
});

document
  .getElementById("btn_case_minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateProuductNumber(false, "case_number");
    updateProductTotalPrice(newCaseNumber, "case_total_amount");
    calcSubTotal();
  });
