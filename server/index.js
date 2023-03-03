//React Socketio Chat - Paso a Paso (Despliegue, Tailwindcss, Nodejs)

import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";

import { PORT } from "./config.js";

const app = express();

const server = http.createServer(app);

const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(cors());
app.use(morgan("dev"));

//listen event new connect
io.on("connection", (socket) => {

  socket.on("message", (data) => {
    socket.broadcast.emit("message", {
      data,
      from: socket.id,
    });
  });
});

server.listen(PORT);
console.log("Server started on port ", PORT);
