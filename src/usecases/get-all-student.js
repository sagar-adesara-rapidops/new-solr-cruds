module.exports = function makegetStudents({
  Joi,
  ValidationError,
  getStudentsdb,
  NoDataFoundError,
  checkAddLangague,
}) {
  return async function getStudents({
    field,
    value,
    fl,
    sort,
    start,
    rows,
    lan,
  }) {
    validateInputData({ field, value, fl, sort, start, rows });
    lan = await checkAddLangague({ name: lan });

    const result = await getStudentsdb({
      field,
      value,
      lan,
      fl,
      sort,
      start,
      rows,
    });

    if (result.length == 0) {
      throw new NoDataFoundError("there is no such field or data in Table!");
    }

    return result;
  };

  function validateInputData(input) {
    const schema = Joi.object({
      field: Joi.string().trim().required(),
      value: Joi.string().trim().required(),
      fl: Joi.string().trim().allow(""),
      start: Joi.number().interger().allow(""),
      sort: Joi.string().trim().allow(""),
      rows: Joi.number().interger().allow(""),
    });

    const { error, value } = schema.validate(input);
    if (error) throw new ValidationError(error.message);
    return value;
  }
};
