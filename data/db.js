const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipesById,
    getAllRecipesByIngredient
};

function getRecipes() {
    return db("recipe");
}

function getRecipesById(id) {
    return db("recipe").where({ id: Number(id) });
}


function getShoppingList(id) {
    return db.select("*")
        .from("ingredient")
        .join("quantity")
        .where("quantity.recipe_id", "=", id)
}

function getInstructions(id) {
    return db.select("*")
        .from("recipe")
        .join("description", "recipe.id", "=", "description.recipe_id")
        .where("description.recipe_id", "=", id)
}
function getAllRecipesByIngredient(id) {
    return db.select("*")
        .from("ingredient")
        .join("recipe")
        .where("ingredient.id", "=", id)
}


