const axios = require("axios");
const { Pool } = require("pg");
const { backendConfig } = require("../config");
const { cockroach_config, solrDatabase_config } = backendConfig;
const { ExternalServiceError } = require("../exceptions");
const { solrEndpoints } = require("../config");
const { solrUrl, collectionUrl } = solrEndpoints;

const cockroach = new Pool({
  user: cockroach_config.username,
  host: cockroach_config.host,
  database: cockroach_config.database,
  password: cockroach_config.password,
  port: cockroach_config.port,
});

const makeStudentDb = require("./student.db");
const studentDb = makeStudentDb({
  axios,
  solrUrl,
  ExternalServiceError,
});

const makeLanguageDb = require("./language.db");
const languageDb = makeLanguageDb({ cockroach });

const makeCollectionDb = require("./collection.db");
const collectionDb = makeCollectionDb({
  axios,
  ExternalServiceError,
  collectionUrl,
  config: solrDatabase_config.config,
});

module.exports = {
  addStundentsdb: studentDb.addStundents,
  getStudentsdb: studentDb.getStudents,
  deleteStudentdb: studentDb.deleteStudents,
  updateStudentdb: studentDb.updateStudent,
  addLanguagedb: languageDb.addLanguage,
  getLanguageByNamedb: languageDb.getLanguageByName,
  addCollectiondb: collectionDb.addCollection,
};
