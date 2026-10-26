
console.log("Hello World!");

// 1. Create an array with 6 favorite foods
let favoriteFoods = [
    "Pizza",
    "Chicken",
    "Burgers",
    "Tacos",
    "Pasta",
    "Fries"
];

// 2. Loop through and print favorite foods
for (let food of favoriteFoods) {
    console.log("One of my favorite foods is " + food);
}

// 3. Print the ranking of favorite foods
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i]);
}

// 4a. Create a food recommendation function
function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me — " + foodName + " is delicious.");
}

// 4b. Call the function 3 times
printFoodRecommendation("Pizza");
printFoodRecommendation("Chicken");
printFoodRecommendation("Tacos");

// List of 50 friends' favorite foods
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers",
    "Ramen", "Pad Thai", "Curry", "Pho", "Nachos",
    "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani",
    "Tacos", "Croissant", "Churros", "Fried Rice",
    "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot",
    "Enchiladas", "Baklava", "Gyros", "Hummus",
    "Empanadas", "Pancakes", "Muffins", "Samosas",
    "Macarons", "Quiche", "Pierogi", "Arepas",
    "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns",
    "Poutine", "Clam Chowder", "Fajitas", "Canelé",
    "Kimchi", "Tamales", "Omelette", "Biscuits",
    "Tempura", "Spring Rolls", "Crepes"
];

// 5. Print foods that contain the letter "a"
for (let food of friendFavorites) {
    if (food.toLowerCase().includes("a")) {
        console.log(food);
    }
}

// 6. Store foods with "a" in a new array
let foodsWithA = friendFavorites.filter(function(food) {
    return food.toLowerCase().includes("a");
});

console.log("Foods with A:", foodsWithA);

// 7. Create an array of food names longer than 6 characters
let longFoodNames = friendFavorites.filter(function(food) {
    return food.length > 6;
});

// 8. Create an array of food names 6 characters or shorter
let shortFoodNames = friendFavorites.filter(function(food) {
    return food.length <= 6;
});

// 9. Print both arrays and compare their lengths
console.log("Long food names:", longFoodNames);
console.log("Short food names:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
    console.log("There are more short-named foods.");
} else {
    console.log("There are the same number of long and short food names.");
}

// 10. Find the longest food name
let longestFood = friendFavorites[0];

for (let food of friendFavorites) {
    if (food.length > longestFood.length) {
        longestFood = food;
    }
}

console.log(
    "The longest food name in the list is " +
    longestFood +
    " with " +
    longestFood.length +
    " characters."
);
