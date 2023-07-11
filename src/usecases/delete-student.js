module.exports = function makeDeleteStudent({
  Joi,
  ValidationError,
  deleteStudentdb,
  checkAddLanguage,
}) {
  return async function deleteStudent({ id, lan }) {
    validateInputData({ id });
    lan = await checkAddLanguage({ name: lan });
    return await deleteStudentdb({ id, lan });
  };

  function validateInputData(input) {
    const schema = Joi.object({
      id: Joi.string().trim().guid().required(),
    });

    const { error, value } = schema.validate(input);
    if (error) throw new ValidationError(error.message);
    return value;
  }
};
