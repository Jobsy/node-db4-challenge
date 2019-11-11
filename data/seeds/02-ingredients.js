exports.seed = function(knex) {
  return knex("ingredients").insert([
        {ingredient_name: "butter"},
        {ingredient_name: "flour"},
        {ingredient_name: "suger"},
      ]);
};
