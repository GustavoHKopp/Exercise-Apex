let convidadosMock = [
    {nome: 'Daniel', idade: 21},
    {nome: 'Gabriel', idade: 54},
    {nome: 'Felipe',  idade: 37},
    {nome: 'Jonas',  idade: 16},
    {nome: 'Anderson',  idade: 37},
    {nome: 'Vitor',  idade: 17},
    {nome: 'Andre',  idade: 14},
    {nome: 'Luiz',  idade: 25}
]

let listaPermitidos = convidadosMock.filter(({idade}) => idade >= 18)

console.log(listaPermitidos)


