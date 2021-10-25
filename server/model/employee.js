const Sequelize = require("sequelize");
const database = require("../config/db.config");
const Employee = database.define("employee", {
  eId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Can't be empty" },
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Can't be empty" },
    },
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Doesn't look like an email.",
      },
    },
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Employee;
