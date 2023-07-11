const backendConfig = {
  solrDatabase_config: {
    host: "localhost",
    port: 8983,
    core: "",
    protocol: "http",
    config: "tryconfig",
  },
  cockroach_config: {
    username: "sagar",
    password: "Rapid@456789",
    database: "language",
    host: "127.0.0.1",
    port: 26257,
    dialect: "postgres",
  },
};

module.exports = { backendConfig };
