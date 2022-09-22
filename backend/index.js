const express =require('express');
const cors = require('cors')
const app = express();


const port =5000;

const userRouter = require('./routers/userRouter');

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, { cors : {
    origin : ['https://localhost:3000']
} });

io.on("connection", (socket) => {
  console.log('client connected');
});

app.use(express.json());
app.use(cors({
    origin : ['https://localhost:3000']
}));
app.use('/user',userRouter);

httpServer.listen(port, () => {
   console.log('express server started..');
})