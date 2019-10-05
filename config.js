const config = {
    appConfig: {
        port: process.env.APP_PORT
    },
    dbConfig: {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS
    }
};

module.exports = config;