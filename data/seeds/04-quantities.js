exports.seed = function(knex) {
  return knex("quantity").insert([
        {recipe_id: 3, ingredient_id: 2, quantity: "5kg"},
        {recipe_id: 2, ingredient_id: 3, quantity: "2g"},
        {recipe_id: 1, ingredient_id: 1, quantity: "3.5g"},
      ]);
};
