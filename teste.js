var FTPClient = require('./ftpclient');

var client = new FTPClient({
    host: 'localhost',
    user: 'username',
    pass: 'mypass',
    client: 'mylocaladress',
    debug: true
});

console.log(client)

client.download('/', (error, content) => {
    if (error) {
        console.log(error)
    } else {
        console.log(content.toString('utf8'))
    }
})