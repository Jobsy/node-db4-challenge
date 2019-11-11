const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    getRecipes,
    getShoppingList
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