import config from './index.js'

module.exports = {
    development: {
        url: config.db.url,
        dialect: config.db.dialect
    },
    test: {
        url: config.db.url,
        dialect: config.db.dialect
    },
    production: {
        url: config.db.url,
        dialect: config.db.dialect
    },
};