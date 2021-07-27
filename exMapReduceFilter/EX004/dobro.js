function dobro(){
    let numbers = document.getElementById('numbers').value
    numbers = numbers.split(',')
    let duplica = numbers.map((item) => {
        return item * 2 })
    
    // console.log(`o dobro dos numeros que você digitou é <br> ${duplica}`)
}