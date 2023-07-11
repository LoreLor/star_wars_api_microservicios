const server= require('./src/server')
const {PORT} = require('./src/config');


server.listen(PORT, () => {
    console.log(`DATABASE listening on port: ${PORT}`);
})