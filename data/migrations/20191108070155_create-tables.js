
exports.up = function (knex) {
    return knex.schema
        .createTable("recipe", table => {
            table.increments()
            table.string("recipe_name", 128)
                .notNullable()
        })
        .createTable("ingredient", table => {
            table.increments()
            table.string("ingredient_name", 128)
                .notNullable()
        })
        .createTable("description", table => {
            table.increments()
            table.string("recipe_description", 128)
                .notNullable()
            table.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipe")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
        })
        .createTable("quantity", table => {
            table.increments()
            table.string("quantity", 128)
            table.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipe")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            table.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredient")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            // table.primary(["recipe_id", "ingredient_id"])
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExits("quantity")
        .dropTableIfExits("description")
        .dropTableIfExits("ingredient")
        .dropTableIfExits("recipe")
};
