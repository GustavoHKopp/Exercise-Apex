var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(agency, checkingAccount) {
        this.agency = agency;
        this.checkingAccount = checkingAccount;
    }
    Account.prototype.show = function () {
        console.log(this.checkingAccount, this.agency);
    };
    return Account;
}());
var LegalPerson = /** @class */ (function (_super) {
    __extends(LegalPerson, _super);
    function LegalPerson(nameCompany, cnpj, checkingAccount, agency) {
        var _this = _super.call(this, agency, checkingAccount) || this;
        _this.nameCompany = nameCompany;
        _this.cnpj = cnpj;
        return _this;
    }
    LegalPerson.prototype.show = function () {
        console.log(this.nameCompany, this.cnpj, this.checkingAccount, this.agency);
    };
    return LegalPerson;
}(Account));
var PhysicalPerson = /** @class */ (function (_super) {
    __extends(PhysicalPerson, _super);
    function PhysicalPerson(clientName, cpf, checkingAccount, agency) {
        var _this = _super.call(this, agency, checkingAccount) || this;
        _this.clientName = clientName;
        _this.cpf = cpf;
        return _this;
    }
    PhysicalPerson.prototype.show = function () {
        console.log(this.clientName, this.cpf, this.checkingAccount, this.agency);
    };
    return PhysicalPerson;
}(Account));
var pessoaFisica1 = new PhysicalPerson('Gustavo Kopp', '123.321.231-12', '123456-3', 'Caixa');
var pessoaJuridica1 = new LegalPerson('Kopp Company', '13. 143. 554/0001-12', '143223-4', 'Viacred');
pessoaFisica1.show();
pessoaJuridica1.show();
