
function calcMedia() {
    const number = document.getElementById('notas').value
    let media = number.split(',')
    let soma = 0

    for (let i = 0; i < media.length; i++) {
        soma = soma + parseInt(media[i])
    
    }

    let answer = soma / media.length
    alert(`a media do aluno é ${answer}`)
}