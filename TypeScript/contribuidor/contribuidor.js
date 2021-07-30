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
// criar class colaborador com cargo e salario
// criar class pessoas com idade nome e cidade
// instanciar dois objetos 
// criar um metodo para mostrar os dados de colaborador e pessoa
var Person = /** @class */ (function () {
    function Person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    Person.prototype.show = function () {
        console.log(this.name, this.age, this.city);
    };
    return Person;
}());
var Collaborators = /** @class */ (function (_super) {
    __extends(Collaborators, _super);
    function Collaborators(name, age, city, office, wage) {
        var _this = _super.call(this, name, age, city) || this;
        _this.posicion = office;
        _this.salary = wage;
        return _this;
    }
    Collaborators.prototype.show = function () {
        console.log(this.name, this.age, this.city, this.posicion, this.salary);
    };
    return Collaborators;
}(Person));
var person1 = new Person('Claudio', 25, 'Maceio');
var collaborator1 = new Collaborators('Alcemar', 47, 'Indaial', 'Carteiro da Sedex', 14000);
console.log(person1);
console.log(collaborator1);
