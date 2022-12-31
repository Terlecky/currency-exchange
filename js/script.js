
const getRate = (currency) => {
    const eurRate = 0.21;
    const gbpRate = 0.18;
    const usdRate = 0.22;

    switch (currency.value) {
        case "GBP":
            return gbpRate;
        case "EUR":
            return eurRate;
        case "USD":
            return usdRate;
    }
}




const onFormSubmit = (event) => {
    event.preventDefault();

    const currency = document.querySelector(".js-currency")
    const resultElement = document.querySelector(".js-result")
    resultElement.innerText = calculateResult(currency); + " " + currency.value;
}


const calculateResult = (currency) => {
    const amountElement = document.querySelector(".js-amount")
    const amount = +amountElement.value
    return getRate(currency) * amount;

}



const init = () => {
    const formElement = document.querySelector(".form")
    formElement.addEventListener("submit", onFormSubmit)
}

init();