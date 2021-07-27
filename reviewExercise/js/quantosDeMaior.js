function verificaMarior() {
    let number = document.getElementById('numbers').value
    let idade = number.split(',')
    cosnt maiorIdade = 18
    for(let i = 0; i < idade.length; i++){
        if (idade >= maiorIdade) {
            document.write(idade)
        }
    }
}