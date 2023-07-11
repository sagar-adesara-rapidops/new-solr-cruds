const express = require("express");
const router = express.Router();
const {
  addStudentAction,
  getstudentsAction,
  deleteStudentAction,
  updateStudentAction,
} = require("./controller");

router.get("/solar/students/get-student/:lan", getstudentsAction);
router.post("/solar/students/add-student/:lan", addStudentAction);
router.patch("/solar/students/update-student/:lan", updateStudentAction);
router.delete("/solar/students/delete-student/:lan", deleteStudentAction);

module.exports = router;
