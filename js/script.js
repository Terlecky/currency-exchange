let amountElement = document.querySelector(".js-amount")
let formElement = document.querySelector(".form")
let resultElement = document.querySelector(".js-result")
let currency = document.querySelector(".js-currency")
let currencyResult = document.querySelector(".currencyResult")


const eurRate = 0.21;
const gbpRate = 0.18;
const usdRate = 0.22;



    formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value 
    let rate;
    
    switch(currency.value){
        case "GBP":
        rate = gbpRate;
            break;
        case "EUR":
        rate = eurRate;
            break;
        case "USD":
        rate = usdRate;
    }
    let result = rate * amount;
    resultElement.innerText = result.toFixed(2);

    switch(currency.value){
        case "GBP":
        currencyResult.innerText = " GPB";
            break;
        case "EUR":
            currencyResult.innerText = " EUR";
            break;
        case "USD":
            currencyResult.innerText = " USD";
    }
});










// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();
     
//     let result = +inputValue * 0.18;

//     if (currency === GBP) {
//         result = inputValue;
//     }
//     resultElement.innerText = result.toFixed(2)
// })



// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let PLN = input.value;
//     let result = +PLN * eurRate;
//     resultElement.innerText = result.toFixed(2)

// })
