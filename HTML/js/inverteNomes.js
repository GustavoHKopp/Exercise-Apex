function inverteNome() {
    let nome = document.getElementById('names').value
    let name = nome.split(',')
    let arrayInv = []
    for (let i = name.length -1; i >= 0; i--) {
        
        arrayInv.push(name[i])
        
    }

    console.log(arrayInv)

}