const app = require('./server/server');
const config = require('./server/config/config');

require('./server/utils/seed');

app.listen(config.port, () => {
    console.log(`Connected to http://localhost:${config.port}`);
});