function verifica() {
    //chamando as variaveis do html
    let heigth = document.getElementById('altura').value
    let gener = document.getElementById('sexo').value
    //transformando em array e separando por ,
    let altura = heigth.split(',')
    let sexo = gener.split(',')
    let maiorAlt = 0
    let posicaoMaior = 0
    let qntMasc = 0
    let qntFem = 0
    //verificando a maior altura
    for (let i = 0; i <= altura.length; i++) {
        if(altura[i] > maiorAlt){
            maiorAlt = altura[i]
            posicaoMaior = i   
        }
    }
    //atribuindo o sexo da maior altura
    let sexoMaior = sexo[posicaoMaior]
   //verificando quantos masc e quantos fem tem
   for (let i = 0; i < gener.length; i++) {
    switch (sexo[i]) {
        case 'm':
            qntMasc++
            break;
        case 'f':
            qntFem++
            break;
    }
}
    //escreve na tela
    document.write(`a maior altura é ${maiorAlt} e é de uma pessoa
    do sexo ${sexoMaior}<br> voçê digitou ${qntMasc} alturas masculinas
    e ${qntFem} alturas femininas`)
        }