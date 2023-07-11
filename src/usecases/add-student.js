module.exports = function makeaddStudent({
  Joi,
  ValidationError,
  addStundentsdb,
  genData,
  checkAddLangague,
}) {
  return async function addStudent({
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
  }) {
    validateInputData({
      name,
      surname,
      age,
      school,
      std,
      percentage,
      number,
      email,
      sports,
    });
    lan = await checkAddLangague({ name: lan });
    let data = genData({
      name,
      surname,
      age,
      school,
      std,
      percentage,
      number,
      email,
      sports,
    });
    let result = await addStundentsdb({ data, lan });
    return result;
  };

  function validateInputData(input) {
    const schema = Joi.object({
      name: Joi.string().trim().required().min(2),
      surname: Joi.string().trim().required().min(2),
      age: Joi.number().integer(),
      school: Joi.string().trim().required(),
      std: Joi.number().integer().required(),
      percentage: Joi.number().precision(2).required(),
      number: Joi.number().integer().required(),
      email: Joi.string().trim().email().required(),
      sports: Joi.string().allow(""),
    });

    const { error, value } = schema.validate(input);
    if (error) throw new ValidationError(error.message);
    return value;
  }
};
