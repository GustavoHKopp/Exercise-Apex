var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.show = function () {
        var mensage = 'As propriedades do prudoto são';
        mensage += '\nMarca: ' + this.marca;
        mensage += '\nPreco: ' + this.preco;
        mensage += '\nValidade: ' + this.validade;
        mensage += '\nValido: ' + this.valido;
        console.log(mensage);
    };
    return Product;
}());
