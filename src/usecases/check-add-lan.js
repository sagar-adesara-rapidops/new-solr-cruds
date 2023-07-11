module.exports = function makeCheckAddLanguage({
  Joi,
  ValidationError,
  addLanguage,
  addCollection,
  getLanguageByNamedb,
}) {
  return async function checkAddLanguage({ name }) {
    if (name != undefined) {
      const data = await getLanguageByNamedb({ langague: name });
      if (data.length == 0) {
        await addLanguage({ langague: name });
        await addCollection({ name });
      }
      return name;
    } else {
      return "en";
    }
  };
};
