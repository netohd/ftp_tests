var FTPClient = require('./ftpclient');

// Informações da conexão
var client = new FTPClient({
    host: 'localhost',
    user: 'username',
    pass: 'mypass',
    client: 'mylocaladress',
    debug: true
});

// Faz o download através do path informado e converte em string
client.download('/', (error, content) => {
    if (error) {
        console.log(error)
    } else {
        console.log(content.toString('utf8'))
    }
})