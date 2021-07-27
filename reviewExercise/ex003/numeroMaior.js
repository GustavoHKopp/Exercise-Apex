// function verificaMaior(){
//     let number = document.getElementById('numbers').value
//     let maior = number.split(',')
//     let numMaior = Math.max.apply(null, maior)
//     console.log(numMaior)
// }
function verificaMaior(){
    let number = document.getElementById('numbers').value
    let maior = number.split(',')
    let numMaior = 0
    for(let i = 0; i < maior.length; i++){
        if (maior[i] > numMaior) {
            numMaior = maior[i];
        }
    }
    document.write(`o maior dos ${maior.length} números que você digitou é ${numMaior}`)
}