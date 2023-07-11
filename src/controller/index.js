const useCases = require("../usecases");

const makeAddStudentAction = require("./add-student");
const addStudentAction = makeAddStudentAction({
  addStudent: useCases.addStudent,
});

const makeGetstudentsAction = require("./get-students");
const getstudentsAction = makeGetstudentsAction({
  getAllStudents: useCases.getAllStudents,
});

const makeDeleteStudentAction = require("./delete-student");
const deleteStudentAction = makeDeleteStudentAction({
  deleteStudent: useCases.deleteStudent,
});

const makeUpdateStudentAction = require("./update-student");
const updateStudentAction = makeUpdateStudentAction({
  updateStudent: useCases.updateStudent,
});

module.exports = {
  addStudentAction,
  getstudentsAction,
  deleteStudentAction,
  updateStudentAction,
};
