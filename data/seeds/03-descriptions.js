exports.seed = function(knex) {
  return knex("descriptions").insert([
        {project_description: "making cake"},
        {project_description: "making cake22222"},
        {project_description: "making cake33333"},
      ]);
};
