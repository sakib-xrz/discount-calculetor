// set total price 
document.getElementById("price-btn").addEventListener("click", function(){
    const priceField = document.getElementById("price-field");
    const priceFieldStr = priceField.value;
    const price = parseFloat(priceFieldStr);
    priceField.value = ""
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = price;
})

// set coupon code
document.getElementById("discount-btn").addEventListener("click", function(){
    const totalPrice = document.getElementById("total-price");
    const totalPriceStr = totalPrice.innerText;
    const total = parseFloat(totalPriceStr);

    const discountField = document.getElementById("discount-field");
    
    const discountAmount = document.getElementById("discount-amount");

    if (discountField.value === "DOM") {
        discountAmount.innerText = total * .3;
        discountField.value = ""
    }
    
    const discountPrice = document.getElementById("discounted-price");
    const discount = parseFloat(document.getElementById("discount-amount").innerText);
    discountPrice.innerText = total - discount;
})
