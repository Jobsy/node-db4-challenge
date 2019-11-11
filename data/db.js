const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db("recipe");
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
        .where("quantity.recipe_id", "=", id)
}
