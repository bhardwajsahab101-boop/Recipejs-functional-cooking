// Recipe data - Foundation for all 4 parts
const recipes = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    time: 25,
    difficulty: "easy",
    description:
      "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
    category: "pasta",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    time: 45,
    difficulty: "medium",
    description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
    category: "curry",
  },
    {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    time: 25,
    difficulty: "easy",
    description:
      "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
    category: "pasta",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    time: 45,
    difficulty: "medium",
    description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
    category: "curry",
  },  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    time: 25,
    difficulty: "easy",
    description:
      "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
    category: "pasta",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    time: 45,
    difficulty: "medium",
    description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
    category: "curry",
  },
    {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    time: 25,
    difficulty: "easy",
    description:
      "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
    category: "pasta",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    time: 45,
    difficulty: "medium",
    description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
    category: "curry",
  },
  // TODO: Add 6 more recipe objects following the same structure
];
const recipeContainer = document.querySelector("#recipe-container");

// Function to create HTML for a single recipe card
const createRecipeCard = (recipe) => {
  return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
        </div>
    `;
};
// Function to render recipes to the DOM
const renderRecipes = (recipesToRender) => {
  const recipeHTML = recipesToRender.map(createRecipeCard).join("");
  recipeContainer.innerHTML = recipeHTML;
};

// Render recipes on page load
renderRecipes(recipes);


