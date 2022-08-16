import express from "express";
import mongoose from "mongoose";
// import routes from "./routes";
import cors from "cors";
import config from "../config/config";
import header from "../middleware/header";
import AdminRoute from "./adminApp/routes";
const app = express(); // Initialize our express app
import bodyparser from "body-parser";

var cron = require("node-cron");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
// var io = require('socket.io')(http);
app.use(cors());
// app.use("/", routes); // Routes
app.use("/admin", AdminRoute); //Admin route
app.use(bodyparser.json());
app.use(express.json());
app.use(header);
app.use(express.urlencoded({ extended: false }));
app.use(express.static("src/resources"));

global.__basedir = __dirname;

app.use((req, res, next) => {
  res.sendStatus(404);
});

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
// Mongo DB connection
mongoose.Promise = global.Promise; // Return promise inside app
const devDbUrl = config.DATABASE_URI;
const mongoDbUrl = devDbUrl;
console.log("mongoDbUrl", mongoDbUrl);

mongoose
  .connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongodb Connection establish.");
    // app.listen(process.env.PORT || 6020 , () => {
    //   console.log("Your node js server is running on port 6020");
    //   server.listen(()=> {
    //     console.log('inside server to connect socket');
    //     io.on("connection", (socket) => {
    //       console.log("New client connected");
    //       socket.on('SEND_MESSAGE', function(chatData){
    //         console.log("SEND_MESSAGE====>",chatData);
    //         io.emit('RECEIVE_MESSAGE', chatData);
    //       });
    //     });
    //   });
    // });

    server.listen(6020, () => {
      console.log("Your node js server is running on port 6020");
      console.log("inside server to connect socket");
      io.on("connection", (socket) => {
        console.log("New client connected");
        socket.on("SEND_MESSAGE", function (chatData) {
          console.log("SEND_MESSAGE====>", chatData);
          io.emit("RECEIVE_MESSAGE", chatData);
        });
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
var db = mongoose.connection;
db.on("error", function (error) {
  console.log(
    "error",
    "[databaseConnection] MongoDB connection error with status: " +
      db.readyState,
    error,
    {}
  );
});
