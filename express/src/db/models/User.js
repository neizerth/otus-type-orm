const typeorm = require("typeorm");

const EntitySchema = typeorm.EntitySchema;

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    dateOfBirth: {
      name: "date_of_birth",
      type: "date",
    },
    age: {
      name: "age",
      type: "int",
    },
  },
});
