const TABLE = "languages";

function makeLanguageDb({ cockroach }) {
  return { addLanguage, getLanguageByName };
  async function addLanguage({ language }) {
    const result = cockroach.query(`insert into ${TABLE}(name)
            values('${language}') Returning id`);
    return result;
  }

  async function getLanguageByName({ language }) {
    const result = await cockroach.query(
      `select * from ${TABLE} where name='${language}'`
    );
    return result.rows;
  }
}
module.exports = makeLanguageDb;
