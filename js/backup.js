const amountElement = document.querySelector(".js-amount")
const formElement = document.querySelector(".form")
const resultElement = document.querySelector(".js-result")
const currency = document.querySelector(".js-currency")
const currencyResult = document.querySelector(".currencyResult")


const eurRate = 0.21;
const gbpRate = 0.18;
const usdRate = 0.22;



    formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value 
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
    const result = rate * amount;
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

