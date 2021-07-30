function verificaDeMaior() {
    const number = document.getElementById('numbers').value
    let idade = number.split(',')
    let maiorIdade = 18
    let quantosDeMaior = 0
    let quantosDeMenor = 0
    for (let i = 0; i < idade.length; i++) {
        if (idade[i] >= maiorIdade) {
            quantosDeMaior++
        } else {
            quantosDeMenor++
        }
    }
    document.write(`das idades que voce digitou ${quantosDeMaior}
    são maior de idade<br>E ${quantosDeMenor} são menor de idade`)
}