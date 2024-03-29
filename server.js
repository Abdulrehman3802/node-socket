const app = require('express')();
const { join } = require('path')
//Doing For socket as on npm documentation 
const nodeServer = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(nodeServer)
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, './index.html'));
})
io.on('connection', socket => {
    console.log('New User Connected...........');
    
    socket.on('chat', (data) => {
       io.emit('chat',data)
    })

});
nodeServer.listen(3000, () => {
    console.log(`Server is Listening on http://localhost:3000/`);
})