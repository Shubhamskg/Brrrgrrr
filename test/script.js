const burger = document.getElementById("burger");

const burgerArray = document.getElementById("burger").childNodes;
const addIngredientButton = document.getElementById("add-ingredient");
const removeIngredientButton = document.getElementById("remove-ingredient");
const costElement = document.getElementById("cost");

const ingredients = ["beef patty", "cheese", "lettuce", "tomato", "onion", "pickle", "bun"];
const beefPatty = {
    name: "Beef patty",
    price: 1.50,
  };
  const cheese = {
    name: "Cheese",
    price: 0.50,
  };
  const lettuce = {
    name: "Lettuce",
    price: 0.25,
  };
  const tomato = {
    name: "Tomato",
    price: 0.25,
  };
  const onion = {
    name: "Onion",
    price: 0.25,
  };
  const pickle = {
    name: "Pickle",
    price: 0.25,
  };
  const bun = {
    name: "Bun",
    price: 0.50,
  };
const calculateCost = (burgerArray) => {
  let cost = 0;
  for (const ingredient of burgerArray) {
    cost += ingredient.price;
  }
  return cost;
};

addIngredientButton.addEventListener("click", () => {
  const ingredient = prompt("What ingredient would you like to add?");
  if (ingredient) {
    const ingredientIndex = ingredients.indexOf(ingredient);
    if (ingredientIndex !== -1) {
      burger.appendChild(document.createTextNode(ingredient));
    }
  }
});

removeIngredientButton.addEventListener("click", () => {
  const ingredient = prompt("What ingredient would you like to remove?");
  if (ingredient) {
    const ingredientIndex = ingredients.indexOf(ingredient);
    if (ingredientIndex !== -1) {
      burger.removeChild(burger.childNodes[ingredientIndex]);
    }
  }
});

costElement.textContent = calculateCost(burgerArray);
