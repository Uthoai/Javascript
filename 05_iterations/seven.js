

// const productsPrice = [ 100, 60, 20, 75 ]
// const initialValue = 0
// const totalPrice = productsPrice.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// )

// OR
// this is for readability...

// const totalPrice = productsPrice.reduce(
//     function (accumulator, currentValue){
//         console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//         return accumulator + currentValue
//     }, 0
// )
// console.log(totalPrice);



const shoppingCart = [
    {
        productsname: "Egg (12pics)",
        quantity: 1,
        productsPrice: 145,
    },
    {
        productsname: "Fish",
        quantity: 2,
        productsPrice: 220,
    },
    {
        productsname: "Apple",
        quantity: 2,
        productsPrice: 180,
    },
]

const totalPrice = shoppingCart.reduce(
    (accumulator, item) => accumulator + (item.productsPrice * item.quantity), 0
)

console.log(totalPrice);

