module.exports = function makeupdateStudent({
  Joi,
  ValidationError,
  updateStudentdb,
  checkAddLangague,
}) {
  return async function updateStudent({ id, fieldData, lan }) {
    validateInputData({ id, fieldData });
    lan = await checkAddLangague({ name: lan });
    let fields = Object.keys(fieldData);
    let updatedFields = {};
    for (const field of fields) {
      updatedFields[field] = { set: fieldData[field] };
    }
    return await updateStudentdb({ id, updatedFields, lan });
  };

  function validateInputData(input) {
    const schema = Joi.object({
      id: Joi.string().trim().uuid().required(),
      fieldData: Joi.object().required(),
    });

    const { error, value } = schema.validate(input);
    if (error) throw new ValidationError(error.message);
    return value;
  }
};
