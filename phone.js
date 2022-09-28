document
  .getElementById("btn_phone_plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updateProuductNumber(true, "phone_number");
    updateProductTotalPrice(newPhoneNumber, "phone_total_amount");
    calcSubTotal();
  });
document
  .getElementById("btn_phone_minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updateProuductNumber(false, "phone_number");
    updateProductTotalPrice(newPhoneNumber, "phone_total_amount");
    calcSubTotal();
  });
