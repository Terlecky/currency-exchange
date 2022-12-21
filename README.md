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
