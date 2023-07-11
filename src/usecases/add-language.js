module.exports = function makeAddLanguage({
  Joi,
  ValidationError,
  addLanguagedb,
}) {
  return async function addLanguage({ language }) {
    validateInputData({ language });

    return await addLanguagedb({ language });
  };

  function validateInputData(input) {
    const schema = Joi.object({
      language: Joi.string().trim().min(2).required(),
    });

    const { error, value } = schema.validate(input);
    if (error) throw new ValidationError(error.message);
    return value;
  }
};
