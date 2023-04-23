var FTPClient = require('./ftpclient');

var client = new FTPClient({
    host: '',
    user: '',
    pass: '',
    client: '',
    debug: true
});

console.log(client)

client.download('/path', (error, content) => {
    if (error) {
        console.log(error)
    } else {
        console.log(content.toString('utf8'))
    }
})