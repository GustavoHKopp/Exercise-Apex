function calculaMedia() {
    let notas = (<HTMLInputElement>document.getElementById('notas')).value
    let grades = notas.split(',')
    
    let media = grades.map((item: string) => parseFloat(item)).reduce((sum: number, current: number) => sum + current) / grades.length
    console.log(media)
}   