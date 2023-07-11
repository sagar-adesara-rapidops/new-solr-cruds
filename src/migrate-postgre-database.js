const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");
const { backendConfig } = require("./config");
const { cockroach_config } = backendConfig;

const sequelize = new Sequelize(
  cockroach_config.database,
  cockroach_config.username,
  cockroach_config.password,
  {
    dialect: "postgres",
    port: cockroach_config.port,
    host: cockroach_config.host,
    dialectOptions: cockroach_config.dialectOptions,
    omitNull: false,
  }
);

const umzug = new Umzug({
  migrations: { glob: "migrations/*.js" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});
(async () => {
  await umzug.up();
})();
