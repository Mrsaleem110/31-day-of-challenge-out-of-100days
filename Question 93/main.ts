// *Question 93:* Find the index of "Banana" in an array of fruits and replace it with "Mango".

// *Explain & TIP:* To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.

// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1) fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}

// Example: Replacing "Banana" in the array
const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); 