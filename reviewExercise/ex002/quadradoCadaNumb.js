function quadriplica() {
    const number = document.getElementById('numbers').value
    let quadrado = number.split(',')
    let num = 0

    for (let i = 0; i < quadrado.length; i++){
        num = parseInt(quadrado[i]) * parseInt(quadrado[i])
        document.write(`o quarto ${quadrado[i]} do é ${num} <br>`)

    }
    
}