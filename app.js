const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (eurodoll) => {
    let dollaResult = eurodoll * oneEuroIs.USD;
    return dollaResult;
}
const fromDollarToYen = (dollaryen) => {
    let yenResult = (dollaryen / oneEuroIs.USD)*oneEuroIs.JPY;
    return yenResult;
}
const fromYenToPound = (yenpound) =>{
    let poundResult = (yenpound / oneEuroIs.JPY)*oneEuroIs.GBP;
    return poundResult;
}
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound };

