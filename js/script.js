
const getRate = (currency) => {
    const eurRate = 0.21;
    const gbpRate = 0.18;
    const usdRate = 0.22;
    let rate;

    switch (currency.value) {
        case "GBP":
            return gbpRate;
        case "EUR":
            return eurRate;
        case "USD":
            return usdRate;
    }
}


const addCurrency = (currency) => {
    switch (currency.value) {
        case "GBP":
            currencyResult.innerText = " GPB";
            break;
        case "EUR":
            currencyResult.innerText = " EUR";
            break;
        case "USD":
            currencyResult.innerText = " USD";
    }
}



const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount")
    const currency = document.querySelector(".js-currency")
    const currencyResult = document.querySelector(".currencyResult")
    const amount = +amountElement.value
    const result = getRate(currency)

    calculateResult();
}

const init = () => {
    const formElement = document.querySelector(".form")
    formElement.addEventListener("submit", onFormSubmit)
}

init();

const updateResultText = () => {
    const resultElement = document.querySelector(".js-result")

    resultElement.innerText = result.toFixed(2);
}