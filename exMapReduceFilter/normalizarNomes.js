let peoplesMock = [
    {name: "felipe", vip: false},
    {name: "danIEl", vip: true},
    {name: "João", vip: true}
]
let corectName = peoplesMock.map(({name}) => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
})
console.log(corectName)
console.log(peoplesMock)