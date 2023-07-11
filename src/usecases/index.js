const axios = require("axios");
const Joi = require("joi");
const { solrEndpoints } = require("../config");
const { ValidationError, NoDataFoundError } = require("../exceptions");
const {
  addStundentsdb,
  getStudentsdb,
  deleteStudentdb,
  updateStudentdb,
  addLangaguedb,
  getLangagueByNamedb,
  addCollectiondb,
} = require("../data-acess");

const makeaddCollection = require("./add-collection");
const addCollection = makeaddCollection({
  Joi,./generate-data
  ValidationError,
  addCollectiondb,
});

const makeaddLangague = require("./add-language");
const addLangague = makeaddLangague({ Joi, ValidationError, addLangaguedb });

const makecheckAddLangague = require("./check-add-lan");
const checkAddLangague = makecheckAddLangague({
  Joi,
  ValidationError,
  addLangague,
  addCollection,
  getLangagueByNamedb,
});

const makegenData = require("./genrate-data");
const genData = makegenData({ Joi });

const makeaddStudent = require("./add-student");
const addStudent = makeaddStudent({
  Joi,
  ValidationError,
  addStundentsdb,
  genData,
  checkAddLangague,
});

const makegetStudents = require("./get-all-student");
const getAllStudents = makegetStudents({
  Joi,
  ValidationError,
  getStudentsdb,
  NoDataFoundError,
  checkAddLangague,
});

const makedeleteStudent = require("./delete-student");
const deleteStudent = makedeleteStudent({
  Joi,
  ValidationError,
  deleteStudentdb,
  checkAddLangague,
});

const makeupdateStudent = require("./update-student");
const updateStudent = makeupdateStudent({
  Joi,
  ValidationError,
  updateStudentdb,
  checkAddLangague,
});

module.exports = {
  addStudent,
  getAllStudents,
  deleteStudent,
  updateStudent,
};
