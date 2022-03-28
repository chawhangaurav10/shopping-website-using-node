const products = [];

module.exports = class Product {
    constructor(ProductTitle){
        this.title = ProductTitle;
    }
    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}