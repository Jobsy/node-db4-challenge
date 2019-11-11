const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    getRecipes,
};

function getRecipes() {
    return db("recipe");
}

// function findResources() {
//     return db("resources");
// }