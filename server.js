const app = require('express')();
//Doing For socket as on npm documentation 
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', client => { console.log('Socket Connected');
client.on('events',(data)=>{
    console.log(data,"data on event!!!");
    emiting(data)
    })
 
});
function emiting(data){

client.emit('events',{
    msg:'data recived',
    content:data
});
}
// ----------------------------------------------
app.get('/',(req,res)=>{
    res.send('<h1>Hello from Socket Server</h1>');
})
server.listen(3000,()=>{
    console.log(`Server is Listening on http://localhost:3000/`);
})