// var obj={
//     "first name":"Araqsya",
//     "last name":"Nikoghosyan",
//     "age":15,
//     "tumo_student":true
// }
// var myjson = JSON.stringify(obj);
// var fs = require('fs');

// function main(){
//    var file  = "obj.json";
//    fs.appendFileSync(file, myjson);
// }
// main();
// var p5=require("p5")
// function keyPressed(){
//     console.log(key);

// }
//   keyPressed()
var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var messages = [];

app.use(express.static("."))
app.get("/", function (req, res) {
    res.redirect("index.html")
});
server.listen(3000);
io.on("connection", function (socket) {
    for (var i in messages) {
        io.sockets.emit("display message", messages[i]);
    }
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    })
});
