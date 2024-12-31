const input = require('sync-input');

const bubblegum = 202;
const toffee = 118;
const iceCream = 2250;
const milkChocolate = 1680;
const doughnut = 1075;
const pancake = 80;
let totalIncome;

console.log("Earned amount:");
console.log("Bubblegum: $" + bubblegum);
console.log("Toffee: $" + toffee);
console.log("Ice cream: $" + iceCream);
console.log("Milk chocolate: $" + milkChocolate);
console.log("Doughnut: $" + doughnut);
console.log("Pancake: $" + pancake);
totalIncome = bubblegum + toffee + iceCream + milkChocolate + doughnut + pancake;
console.log("\nIncome: $" + totalIncome);
const staffExpenses = Number(input("Staff expenses: "));
const otherExpenses = Number(input("Other expenses: "));
totalIncome -= staffExpenses + otherExpenses;
console.log("Net income: $" + totalIncome);
