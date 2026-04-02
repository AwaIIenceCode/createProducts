function createProducts(name, price, quantity)
{
    return {
        name: name,
        price: price,
        quantity: quantity,
    
        getTotalPrice: function() 
        {
            return this.price * this.quantity;
        },

        describe: function() 
        {
            console.log(`Product -> ${this.name}, Price -> ${this.price}, Quantity -> ${this.quantity}`);
        },

        applyDiscount: function(percent) { this.price -= this.price * (percent / 100) }
    }   
}

function main()
{
    let product1 = createProducts("Phone", 1500, 3);
    let product2 = createProducts("Laptop", 2000, 1);

    product1.describe();
    product1.getTotalPrice();
    product1.describe();

    product2.getTotalPrice();
    product2.applyDiscount(15);
    product2.describe();
}

main();