const COLLECTION = "students";

function makeStudentDb({ axios, solrUrl, ExternalServiceError }) {
  return { addStundents, getStudents, deleteStudents, updateStudent };
  async function addStundents({ data, lan }) {
    try {
      const url = `${solrUrl}/${COLLECTION}_${lan}/update?commit=true`;
      let result = await axios.post(url, [data]);
      return result;
    } catch (error) {
      throw new ExternalServiceError(
        "EX000112",
        error.response.status,
        error.response.data.error.msg
      );
    }
  }
  async function getStudents({ field, value, lan, fl, sort, start, rows }) {
    try {
      const url = `${solrUrl}/${COLLECTION}_${lan}/select`;

      const params = {
        q: `${field}:${value}`,
        wt: "json",
        rows: 1000,
      };

      if (fl != undefined) {
        params["fl"] = fl;
      }
      if (sort != undefined) {
        params["sort"] = sort;
      }
      if (start != undefined) {
        params["start"] = start;
      }
      if (rows != undefined) {
        params["rows"] = rows;
      }

      const result = await axios.get(url, { params });
      return result.data.response.docs;
    } catch (error) {
      throw new ExternalServiceError(
        "EX000112",
        error.response.status,
        error.response.data.error.msg
      );
    }
  }
  async function deleteStudents({ id, lan }) {
    try {
      const url = `${solrUrl}/${COLLECTION}_${lan}/update?commit=true`;
      const params = {
        q: `id:${id}`,
      };
      const result = await axios.delete(url, { params });
      return result.data;
    } catch (error) {
      throw new ExternalServiceError(
        "EX000112",
        error.response.status,
        error.response.data.error.msg
      );
    }
  }
  async function updateStudent({ id, updatedFields, lan }) {
    try {
      const result = await axios.post(
        `${solrUrl}/${COLLECTION}_${lan}/update?commit=true`,
        [{ id, ...updatedFields }],
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return result.data;
    } catch (error) {
      throw new ExternalServiceError(
        "EX000112",
        error.response.status,
        error.response.data.error.msg
      );
    }
  }
}

module.exports = makeStudentDb;
