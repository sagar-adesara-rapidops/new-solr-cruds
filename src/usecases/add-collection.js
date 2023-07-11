module.exports = function makeAddCollection({
  Joi,
  ValidationError,
  addCollectiondb,
}) {
  return async function addCollection({ name }) {
    validateInputData({ name });

    name = "students_" + name;
    return addCollectiondb({ name });
  };

  function validateInputData(input) {
    const schema = Joi.object({
      name: Joi.string().trim().min(2).required(),
    });

    const { error, value } = schema.validate(input);
    if (error) throw new ValidationError(error.message);
    return value;
  }
};
