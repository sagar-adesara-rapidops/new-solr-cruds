const {backendConfig}  = require('../backend-config');

const solrEndpoints = {
    'solrUrl': `${backendConfig.solrDatabase_config.protocol}://${backendConfig.solrDatabase_config.host}:${backendConfig.solrDatabase_config.port}/solr`,
    'collectionUrl': `${backendConfig.solrDatabase_config.protocol}://${backendConfig.solrDatabase_config.host}:${backendConfig.solrDatabase_config.port}/api/collections`
}

module.exports = {solrEndpoints}