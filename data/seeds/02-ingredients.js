exports.seed = function(knex) {
  return knex("recipes").insert([
        {ingredient_name: "butter"},
        {ingredient_name: "flour"},
        {ingredient_name: "suger"},
      ]);
};
