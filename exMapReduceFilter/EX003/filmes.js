let filmesMock = [
    {nome: 'Um Lugar Silencioso', duracaoMin: 97, nota: 8},
    {nome: 'veloses e furiosos', duracaoMin: 145, nota: 9},
    {nome: 'Viuva Negra', duracaoMin: 137, nota: 7},
    {nome: 'space jam', duracaoMin: 120, nota: 9},
    {nome: 'os croods 2', duracaoMin: 96, nota: 6}
]

let filmesBons = filmesMock.filter(({nota}) => nota >= 8)
let filmesRuins = filmesMock.filter(({nota}) => nota < 8)
// console.log(filmesBons)
// console.log(filmesRuins)
// document.write(`Filmes bons ${filmesBons[0].nome}`)

document.write('<h3><stroong>Filmes Bons</strong></h3> <br>')
for (const nome of filmesBons) {
    document.write(`${nome.nome} <br>`)
}
document.write('<h3><stroong>Filmes Ruins</strong></h3> <br>')
for (const nome of filmesRuins) {
    document.write(`${nome.nome} <br>`)
}
