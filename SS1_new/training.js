// Exercise
const carts = [
    {
        name: 'Product 1',
        price: 1000,
        quantity: 1
    },
    {
        name: 'Product 2',
        price: 1500,
        quantity: 2
    },
    {
        name: 'Product 3',
        price: 2000,
        quantity: 1
    },
    {
        name: 'Product 4',
        price: 600,
        quantity: 4
    },
    {
        name: 'Product 5',
        price: 500,
        quantity: 3
    },
]

/**
 * 1. Update total for each item (price * quantity)
 * 2. Filter products in cart with total >= 2000
 * 3. Show all products with (name, total)
 */


const updCart = carts.map((carts)=> {
    carts.total = carts.price * carts.quantity
})


const filterTotal = carts.filter((cart) => {
    // console.log("hehe",total)
    return cart.total >= 2000;
})
console.log(filterTotal)

const getNames = (...carts) => {
    carts.forEach(items => {
        const{name, total} = items;
        console.log(name, total);
    });
}

getNames(...carts)

const grandTotal = carts.reduce((accumulator, cartItem) => {
    accumulator + cartItem.total, 0

})

console.log("Grand Total:",grandTotal)
