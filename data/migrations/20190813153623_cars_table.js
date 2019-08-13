exports.up = function(knex) {
  return knex.schema.createTAble("cars", tble => {
    tbl.increments();

    tbl
      .text("vin", 17)
      .unique()
      .notNullable();

    tbl.text("make", 128).notNullable();

    tbl.text("model", 128).notNullable();

    tbl.integer("mileage", 7).notNullable();

    tbl.text("transmissionType", 128);

    tbl.text("titleStatus", 128);
  });
};

exports.down = function(knex) {};
