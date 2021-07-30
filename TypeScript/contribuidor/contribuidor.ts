// // criar class colaborador com cargo e salario
// // criar class pessoas com idade nome e cidade
// // instanciar dois objetos 
// // criar um metodo para mostrar os dados de colaborador e pessoa
// class Person{
//     protected name: string
//     protected age: number
//     protected city: string
//     constructor(name: string, age:number, city: string){
//         this.name = name
//         this.age = age
//         this.city = city
//     }
//     show(){
//         console.log(this.name, this.age, this.city)
//     }
// }
// class Collaborators extends Person{
//     protected posicion: string
//     protected salary: number
//     constructor(name: string, age:number, city: string ,office: string, wage: number){
//         super(name, age, city)
//         this.posicion = office
//         this.salary = wage
//     }
//     show(){
//         console.log( this.name, this.age, this.city ,this.posicion, this.salary)
//     }
// }
// let person1 = new Person('Claudio', 25, 'Maceio')
// let collaborator1 = new Collaborators('Alcemar', 47, 'Indaial', 'Carteiro da Sedex', 14000)
// console.log(person1)
// console.log(collaborator1)