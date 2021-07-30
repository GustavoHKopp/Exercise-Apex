// class Account{
//     protected checkingAccount: string
//     protected agency: string
//     constructor(agency: string,
//         checkingAccount: string){
//         this.agency = agency
//         this.checkingAccount = checkingAccount
//     }
//     show():void{
//         console.log(this.checkingAccount, this.agency)
//     }
// }
// class LegalPerson extends Account{
//     protected nameCompany: string
//     protected cnpj: string
//     constructor( nameCompany: string,
//         cnpj: string, 
//         checkingAccount: string,
//         agency: string
//         ){
//         super(agency, checkingAccount)
//         this.nameCompany = nameCompany
//         this.cnpj = cnpj
//     }
//     show():void{
//         console.log(this.nameCompany, this.cnpj, this.checkingAccount, this.agency)
//     }
// }
// class PhysicalPerson extends Account{
//     protected clientName: string
//     protected cpf: string

//     constructor( clientName: string,
//         cpf: string,
//         checkingAccount: string,
//         agency: string
//         ){
//         super(agency, checkingAccount)
//         this.clientName = clientName
//         this.cpf = cpf
//     }
//     show():void{
//         console.log(this.clientName, this.cpf, this.checkingAccount, this.agency)
//     }
// }
// let pessoaFisica1 = new PhysicalPerson( 'Gustavo Kopp', '123.321.231-12', '123456-3','Caixa')
// let pessoaJuridica1 = new LegalPerson('Kopp Company', '13. 143. 554/0001-12', '143223-4', 'Viacred')
// pessoaFisica1.show()
// pessoaJuridica1.show()