const app = require('./server/server');

const settings = require('../settings');

require('./server/utils/seed');

app.listen(settings.API_PORT, () => {
    console.log(`Server listening on port ${settings.API_PORT}`);
});