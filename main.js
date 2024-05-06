const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-butttn");
const recipeontainer = document.getElementById("recipe-container");

const recipes = [
{ title: "Spaghetti Carbonara", 
image: "spaghetti.jpg", 
ingredients: {
    spaghetti: "8 ounces (about 225g) of spaghetti",
    eggs: "4 large eggs",
    cheese: "1 cup (about 100g) grated Pecorino Romano or Parmesan cheese",
    pancetta: "6-8 slices of pancetta or bacon, diced",
    garlic: "2 cloves garlic, minced",
    pepper: "Freshly ground black pepper",
    salt: "Salt (optional, as the cheese and pancetta are already salty)",
    parsley: "Chopped fresh parsley for garnish (optional)"
  },
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
{ title: "Chicken Nuggets", 
image: "nuggets.jpg", 
ingredients: {
    chicken: "1 lb (about 450g) boneless, skinless chicken breasts or thighs, cut into bite-sized pieces",
    flour: "1 cup (about 120g) all-purpose flour",
    eggs: "2 large eggs, beaten",
    breadcrumbs: "1 cup (about 100g) breadcrumbs (seasoned or add your own seasonings)",
    saltAndPepper: "Salt and pepper to taste",
    oil: "Oil for frying (vegetable oil works well)",
  },
  instructions: [
    "Season chicken pieces with salt and pepper.",
    "Set up a breading station with three shallow bowls: one with flour, one with beaten eggs, and one with breadcrumbs.",
    "Dredge each chicken piece in flour, then dip in beaten eggs, and coat in breadcrumbs.",
    "Fry breaded chicken nuggets in preheated oil (350°F / 175°C) until golden brown and cooked through, about 5-7 minutes.",
    "Drain excess oil on paper towels and serve hot."
  ]
},
{ title: "Pancakes", 
image: "pancakes.jpg", 
ingredients: {
    flour: "1 cup (about 125g) all-purpose flour",
    sugar: "2 tablespoons granulated sugar",
    bakingPowder: "1 teaspoon baking powder",
    bakingSoda: "1/2 teaspoon baking soda",
    salt: "1/4 teaspoon salt",
    buttermilk: "1 cup (about 240ml) buttermilk (or 1 cup milk mixed with 1 tablespoon lemon juice or vinegar, let sit for 5 minutes)",
    egg: "1 large egg",
    butter: "2 tablespoons unsalted butter, melted",
    oil: "Butter or oil for cooking",
    toppings: "Optional toppings: maple syrup, fresh fruit, whipped cream, chocolate chips, etc."
  },
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