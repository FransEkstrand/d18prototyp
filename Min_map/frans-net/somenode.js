var net = require('net');

var client = new net.Socket();
client.connect(8080, '169.254.113.171', function () {
    console.log('Connected');
    client.write('ok såde');
});

client.on('data', function (data) {
    console.log('Received: ' + data);
    client.destroy(); // kill client after server's response
});

client.on('close', function () {
    console.log('Connection closed');
});