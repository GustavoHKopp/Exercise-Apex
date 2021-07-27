function maiusculo(params) {
    let name = document.getElementById('name').value
    name = name.split(',' || ', ')
    let maiusculo = name.map((item) => {
        return item.toUpperCase()
    }) 
    console.log(maiusculo)
}