exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          vin: "7521asdtr3asdasd",
          make: "Toyota",
          model: "Corolla",
          mileage: 58762,
          transmissionType: "automatic",
          titleStatus: "clean"
        },
        {
          id: 2,
          vin: "7521asdtr3asd654",
          make: "Toyota",
          model: "Corolla",
          mileage: 58762,
          transmissionType: "automatic",
          titleStatus: "clean"
        },
        {
          id: 3,
          vin: "7521atr3asd45648",
          make: "Toyota",
          model: "Corolla",
          mileage: 58762,
          transmissionType: "automatic",
          titleStatus: "clean"
        }
      ]);
    });
};
