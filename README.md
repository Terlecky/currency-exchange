# Currency exchange

## Demo

https://terlecky.github.io/currency-exchange/

## Page previev

![DemoGIF](https://i.postimg.cc/jqnLcdPZ/currency-exchange.gif)

## Description
This is simple currency converter.

## Technologies
- HTML
- CSS
- Javascript - ECMAScript 2020
- BEM convention
- Normalize.css
- Open Graph Protocol

## Code fragment

```
formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value 
    let rate;
    
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
