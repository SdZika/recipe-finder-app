const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const savedRecipesContainer = document.getElementById("savedRecipes");
const savedRecipes = [];

const dummyRecipes = [
  {
  title: "Spaghetti Carbonara", 
  image: "spaghetti.jpg", 
  ingredients: ["spaghetti", "eggs", "cheese", "pancetta", "garlic", "pepper", "salt", "parsley"],
  instructions: [
      "Cook spaghetti until al dente, then drain, reserving 1 cup of pasta water.",
      "Cook diced pancetta/bacon until crispy. Remove and set aside.",
      "Sauté minced garlic in the same skillet until fragrant, then remove from heat.",
      "Whisk eggs, cheese, and black pepper in a bowl.",
      "Toss drained spaghetti in the skillet with garlic.",
      "Add egg mixture to spaghetti, tossing quickly to coat. Add pasta water if too thick.",
      "Return cooked pancetta/bacon to skillet, toss, and season to taste.",
      "Serve hot, garnished with parsley if desired."
    ]
  },
  {
  title: "Chicken Nuggets", 
  image: "nuggets.jpg", 
  ingredients: ["chicken", "flour", "eggs", "breadcrumbs", "salt", "pepper", "oil"],
  instructions: [
      "Season chicken pieces with salt and pepper.",
      "Set up a breading station with three shallow bowls: one with flour, one with beaten eggs, and one with breadcrumbs.",
      "Dredge each chicken piece in flour, then dip in beaten eggs, and coat in breadcrumbs.",
      "Fry breaded chicken nuggets in preheated oil (350°F / 175°C) until golden brown and cooked through, about 5-7 minutes.",
      "Drain excess oil on paper towels and serve hot."
    ]
  },
  {
  title: "Pancakes", 
  image: "pancakes.jpg", 
  ingredients: ["flour", "sugar", "baking powder", "baking soda", "salt", "buttermilk", "egg", "butter", "oil", "toppings"],
  instructions: [
      "In a large mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.",
      "In a separate bowl, beat the egg, then stir in the buttermilk and melted butter.",
      "Pour the wet ingredients into the dry ingredients and stir until just combined. It's okay if there are a few lumps in the batter; overmixing can lead to tough pancakes.",
      "Heat a non-stick skillet or griddle over medium heat and lightly grease with butter or oil.",
      "Once the skillet is hot, pour about 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface of the pancake and the edges start to look set, about 2-3 minutes.",
      "Flip the pancake with a spatula and cook for an additional 1-2 minutes, or until golden brown and cooked through.",
      "Transfer the cooked pancakes to a plate and keep warm while you cook the remaining batter.",
      "Serve the pancakes hot with your favorite toppings such as maple syrup, fresh fruit, whipped cream, or chocolate chips."
    ]
  }
  ];

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query !== '') {
        searchRecipes(query);
    } else {
        alert('Please enter a search query');
    }
});

function searchRecipes(query) {
const searchTerm = query.toLowerCase();
const foundRecipe = dummyRecipes.find(recipe => recipe.title.toLowerCase().includes(searchTerm));
const foundIngridient = dummyRecipes.find(recipe => recipe.ingredients.join(" ").toLowerCase().includes(searchTerm));

if (foundRecipe) {
   displayRecipes(foundRecipe);
  } else if (foundIngridient) {
    displayRecipes(foundIngridient);
  } else {
    alert ("No recipe found for input: ", searchInput.value);
  }
}

function displayRecipes(recipe) {
    recipeContainer.innerHTML = '';
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="images/${recipe.image}" alt="${recipe.title}">
        <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
        <p>Instructions: ${recipe.instructions}</p>
    `;
    recipeContainer.appendChild(recipeDiv);

    const saveButton = document.createElement("button");
    saveButton.classList.add("save-button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", function() {
      saveRecipe(recipe);
    });
    recipeDiv.appendChild(saveButton);
}

function saveRecipe(recipe) {
  savedRecipesContainer.innerHTML = '';
  savedRecipes.push(recipe);
  if(savedRecipes.length > 0) {
    savedRecipes.forEach(recipe => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");
        recipeElement.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="../images/${recipe.image}" alt="${recipe.title}">
            <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
            <p>Instructions: ${recipe.instructions}</p>
        `;
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete Recipe";
        deleteButton.addEventListener("click", function(e) {
        let target = e.target;
        target.parentElement.remove();
    });
        recipeElement.appendChild(deleteButton);
        savedRecipesContainer.appendChild(recipeElement);
    });
  } else {
    const savedRecipesContainer = document.getElementById("savedRecipes");
    savedRecipesContainer.innerHTML = "<p>No saved recipes found.</p>";
  }
}

/*function deleteRecipe(recipe){
  let target = recipe;
  target.parentElement.remove();
  
}*/