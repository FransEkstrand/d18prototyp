
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.io = io
let connectedUsers = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    console.log('a user connected ' + socket.id);
    if (!connectedUsers.includes(socket.id)) {
        connectedUsers.push(socket.id)

    }
    console.log(connectedUsers);
    socket.on('disconnect', function () {
        console.log('A user disconnected');
        const index = connectedUsers.indexOf(socket.id)
        if (index > -1) {
            connectedUsers.splice(index, 1)
            console.log(connectedUsers);
        }
    });

    socket.on('changebuttontext', function (data) {
        setTimeout(() => {
            socket.emit('textchanged', { message: "Running" });
        }, 4000);
    })

});

app.get('/random', (req, res) => {
    let randomClient = connectedUsers[Math.floor(Math.random() * connectedUsers.length)]
    app.io.to(randomClient).emit('textchanged', { message: 'BRUUUUUUUUUUUUUUUUUUH' });

    let message = "send a meme to random user"
    res.send(message)
})

app.get('/broad', (req, res) => {
    console.log("broadcast");
    app.io.emit('textchanged', { message: "u just got broadcasted" })
    let message = "send a meme to users"
    res.send(message)
})
/*
io.on('message', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });
*/

http.listen(3000, () => {
    console.log('listening on *:3000');
});