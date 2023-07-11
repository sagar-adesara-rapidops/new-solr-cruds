module.exports = function makeaddstudentAction({ addStudent }) {
  return async (req, res) => {
    try {
      const {
        name,
        surname,
        age,
        school,
        std,
        percentage,
        number,
        email,
        sports,
      } = req.body;

      const { lan } = req.params;

      const result = await addStudent({
        name,
        surname,
        age,
        school,
        std,
        percentage,
        number,
        email,
        sports,
        lan,
      });

      res.status(204).send();
    } catch (error) {
      // console.log(error);
      const status = error.httpStatusCode ? error.httpStatusCode : 400;

      res.status(status).json({
        status: "error",
        customCode: error.customCode,
        error: error.message,
      });
    }
  };
};
