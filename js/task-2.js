const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// ingredients.forEach(elem => {
//     const itemRef = document.createElement("li")
//     itemRef.textContent = elem;
//     // console.log(itemRef)
//     const categRef = document.querySelector("#ingredients")
//     categRef.appendChild(itemRef)
// }
// )

//create function

const createCategForIngredient = (ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;

  const categRef = document.querySelector("#ingredients");
  categRef.appendChild(itemRef);

  return categRef;
};

const createListForIngredients = (ingredients) =>
  ingredients.forEach((ingredient) => createCategForIngredient(ingredient));

createListForIngredients(ingredients);
