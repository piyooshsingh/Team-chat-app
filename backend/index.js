const express =require('express');
const cors = require('cors')
const app = express();


const port =5000;

const userRouter = require('./routers/userRouter');

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, { cors : {
    origin : ['http://localhost:3000']
} });

io.on("connection", (socket) => {
  console.log('client connected');

  socket.on('sendmsg', (data) => {
    console.log(data);
    data.sent = false;
    socket.to(data.room).emit('recmsg', data);
  })

  socket.on('joinroom', (roomname) => {
    socket.join(roomname);
  })
});

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}));
app.use('/user',userRouter);

httpServer.listen(port, () => {
   console.log('express server started..');
})