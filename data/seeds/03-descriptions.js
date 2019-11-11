exports.seed = function(knex) {
  return knex("description").insert([
        {recipe_description: "making cake", recipe_id: 3},
        {recipe_description: "making cake22222", recipe_id: 2},
        {recipe_description: "making cake33333", recipe_id: 1},
      ]);
};
