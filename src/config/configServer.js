

exports.configSequelize = {

    database: process.env.DB,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    options: {
        host: process.env.HOST_DB,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
}