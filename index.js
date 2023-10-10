let froyoInput = prompt(
    "Enter your order separated by commas",
    "strawberry, mango, chocolate, vanilla, butter pecan"
);

let orderArray = froyoInput.split(",");

const counts = {};

orderArray.forEach ((x) => {
 counts[x] = (counts[x] || 0) + 1; 
});

console.log(counts);