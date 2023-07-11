"use strict";
const { Sequelize } = require("sequelize");

module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.sequelize.query(
      `CREATE TABLE languages (
        id UUID NOT NULL DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        CONSTRAINT languages_pkey PRIMARY KEY (id ASC),
        UNIQUE INDEX languages_name_key (name ASC)
      )`
    );
  },
  async down({ context: queryInterface }) {
    await queryInterface.dropTable("languages");
  },
};
