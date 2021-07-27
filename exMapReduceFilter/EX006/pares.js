function isPair(){
    let numbers = document.getElementById('numbers').value
    numbers = numbers.split(',')
    let pair = numbers.filter((item) => {return item % 2 == 0})
    console.log(pair)
}