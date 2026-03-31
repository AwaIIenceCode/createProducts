let createProducts = 
{
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

    applyDiscount: function() 
    {

    }
}

function main()
{

}

main();