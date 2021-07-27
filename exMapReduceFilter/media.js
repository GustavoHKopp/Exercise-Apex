function calculaMedia() {
    let notas = document.getElementById('notas').value
    notas = notas.split(',')
    
    let media = notas.map(item => parseFloat(item)).reduce((sum, current) => sum + current) / notas
    console.log(media)
}   