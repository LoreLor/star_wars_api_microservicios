const server= require('./src/server')
const {PORT} = require('./src/config');


server.listen(PORT || 8004, () => {
    console.log(`DATABASE listening on port: ${PORT}`);
})