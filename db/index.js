const server= require('./src/server')


server.listen(8004, () => {
    console.log(`DATABASE listening on port: 8004`);
})