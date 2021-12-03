require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});
const Server = require('./src/models/Server');
const port = process.env.PORT;

const client = Server.listen(port);

module.exports = { client, server: Server };