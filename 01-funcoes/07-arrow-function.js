function multiplicar(a, b) {
    return a * b;
}
//
const multiplicarAnonima = function (a, b) {
    return a * b;
}

const multiplicarArrow = (a,b) => {
    return a * b;
}
console.log(multiplicar(5, 7));
console.log(multiplicarAnonima(5, 7));
console.log(multiplicarArrow(5, 7));