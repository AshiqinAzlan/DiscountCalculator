document
  .getElementById("discountForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let userType = document.getElementById("userType").value;
    let purchaseAmount = parseFloat(
      document.getElementById("purchaseAmount").value
    );
    let discount;

    switch (userType) {
      case "guest":
        discount = 0;
        break;
      case "member":
        discount = 5;
        break;
      case "premiumMember":
        discount = 10;
        break;
      case "employee":
        discount = 20;
        break;
      default:
        discount = 0;
    }

    let discountAmount = purchaseAmount * (discount / 100);
    let finalAmount = purchaseAmount - discountAmount;

    document.getElementById("result").innerHTML = `
    <p>Your discount is ${discount}%</p>
    <p>Your discount amount is $${discountAmount.toFixed(2)}</p>
    <p>Your final price is $${finalAmount.toFixed(2)}</p>
  `;
  });
