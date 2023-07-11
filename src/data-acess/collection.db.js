function makeCollectioDb({
  axios,
  collectionUrl,
  ExternalServiceError,
  config,
}) {
  return { addCollection };
  async function addCollection({ name }) {
    const params = {
      omitHeader: true,
    };

    const requestPayload = {
      create: {
        name,
        numShards: 1,
        config,
      },
    };

    const result = await axios.post(collectionUrl, requestPayload, { params });
    return result;
  }
}
module.exports = makeCollectioDb;
