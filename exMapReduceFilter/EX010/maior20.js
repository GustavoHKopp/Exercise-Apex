// filtre os pares
// dobre os valores
// exiba os maiores que 20
let numMock = [10, 18, 1, 15, 2, 12, 21, 4, 33, 100]
let dobrarPares = numMock.filter((item) => item % 2 === 0).map((item) => item * 2)
let maior20 = dobrarPares.filter((item) => item >= 20)
console.log(numMock)
console.log(dobrarPares)
console.log(maior20)
