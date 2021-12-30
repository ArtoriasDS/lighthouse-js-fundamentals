const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}


for (let n = 0; n < ingredients.length; n++) {
  console.log(ingredients[n]);
}

for (let m = ingredients.length; m >= 0; m--) {
  console.log(ingredients[m]);
}
