let objectProducts = 
{
    getTotalPrice: function() 
    {
        return this.price * this.quantity;
    },

    describe: function() 
    {
        console.log(`Product -> ${this.name}, Price -> ${this.price}, Quantity -> ${this.quantity}`);
    },

    applyDiscount: function() 
    {

    }
}

function createProducts(name, price, quantity) 
{
    return {
        name: name,
        price: price,
        quantity: quantity
        }
}

function main()
{
    let product_1 = createProducts("Phone", 1500, 3);
    createProducts.getTotalPrice;
}

main();