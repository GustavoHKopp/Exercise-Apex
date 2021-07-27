let convidados = [
    {nome: 'Daniel', vip: true, idade: 21},
    {nome: 'Gabriel', vip: true, idade: 54},
    {nome: 'Felipe', vip: false, idade: 37}
]

// OS TRES FAZEM A MESMA COISA MAS A ULTIMA É MAIS LEGIVEL

// let vipsList = convidados.filter((item) => isVip(item))
// function isVip(item){
//     return item.vip == true
// }
// let vipList = convidados.filter((item) => item.vip)

let vipList = convidados.filter(({vip}) => vip)

console.log(vipList)
