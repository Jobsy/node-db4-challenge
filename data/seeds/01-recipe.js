exports.seed = function(knex) {
  return knex("recipes").insert([
        {recipe_name: "cake"},
        {recipe_name: "cake2222"},
        {recipe_name: "cake3333"},
      ]);
};
