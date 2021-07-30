function isPair(){
    let numbers = document.getElementById('numbers').value
    numbers = numbers.split(',')
    let pair = numbers.filter(function (item: number) { return item % 2 == 0 })
    console.log(pair)
}