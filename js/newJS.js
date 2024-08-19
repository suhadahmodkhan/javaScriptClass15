const card = document.getElementById("card1")
const cardMoney1 = parseFloat(document.getElementById("card-money1").innerText).toFixed(2)
const card3 = document.getElementById("card3")
const addName = document.getElementById("add-name");
const cardName = document.getElementById("card-name1");
const cardName3 = document.getElementById("card-name3");
const totalPrice = document.getElementById("total-price")
const appleButton = document.getElementById("apply-button")
const coupon = document.getElementById("coupon-code")
const discountPrice = document.getElementById("discount-price")
let i = 0 ;
card.addEventListener("click" , function() {
// addName.innerText = cardName.innerText ;
const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
totalPrice.innerText = parseFloat(cardMoney1) + parseFloat(floatTotalPrice) ;
  
    if(parseFloat(totalPrice.innerText) > 200){
        console.log("true")
        appleButton.removeAttribute("disabled")
    }
    // i++ ;
    // const p = document.createElement("p")
    // p.innerText = i +"."+ cardName.innerText ;
    // addName.appendChild(p);
})
card3.addEventListener("click" , function() {
// addName.innerText = cardName3.innerText ;
    // console.log("clicked")
    i++ ;
    const p = document.createElement("p")
    p.innerText = i +"."+  cardName3.innerText ;
    addName.appendChild(p);
})
appleButton.addEventListener("click", function () {
    console.log("clicked")
    if(coupon.value == "SELL200"){
        const discount =( parseInt(totalPrice.innerText) * 100 ) / 20;
        discountPrice.innerText = discount ;
        // console.log(discountPrice)
    }
})