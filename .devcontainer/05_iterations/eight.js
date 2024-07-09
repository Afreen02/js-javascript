const myNums = [1, 2, 3]

// reduce in function
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

// reduce in arrow function
const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
console.log(myTotal);


const shoppingcart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python",
        price:6999
    },
    {
        itemName:"reactjs",
        price:4999
    },
    {
        itemName:"data science",
        price:12999
    },
]
const pricetoPay = shoppingcart.reduce( (acc, item) => acc + item.price, 0)
console.log(pricetoPay);