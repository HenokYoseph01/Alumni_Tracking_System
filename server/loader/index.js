const app = require('./app');
const http = require('http');

const PORT = process.env.PORT || 5000;

const igniter = ()=>{
    const server = http.createServer(app);

    server.listen(PORT,()=>{
        console.log(`Server listening on ${PORT}`)
    })
    
}

module.exports = igniter;