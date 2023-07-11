module.exports = function makeGenerateData({ Joi }) {
  return function generateData({
    name,
    surname,
    age,
    school,
    std,
    percentage,
    number,
    email,
    sports,
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
    let data = {
      name_s: name,
      surname_s: surname,
      age_i: age,
      school_s: school,
      standartd_i: std,
      percentage_f: percentage,
      contact_l: number,
      email_s: email,
      sports_ss: sports,
    };
    return data;
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
