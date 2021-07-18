import http from "http";
import express from "express";
import * as socket from "socket.io";
import dotenv from "dotenv";
import morgan from 'morgan'
import bodyParser from "body-parser";
import routes from "./routes/Index.js";
import connectDB from "./config/database.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes);

const server = http.createServer(app);
const io = new socket.Server(server);

io.on("connection", (socket) => {
  console.log("connection");
});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}!`);
});
