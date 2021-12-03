const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

class Server {

    constructor() {
        this.app = express();
        this.path = {
            colors: '/api/colors'
        }; // Server paths

        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.path.colors, require('../routers/colors'))
    }

    listen(port) {
        return this.app.listen(port, () => {
            console.log(`Server init in htts://localhost:${port}`);
        });
    }
}

module.exports = new Server();