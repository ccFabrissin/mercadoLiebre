const express = require("express");
const app = express();
const path = require("path");
const { send } = require("process");
const pathPublic = path.resolve(__dirname, "./public");
app.use(express.static(pathPublic));

app.listen(3030, ()=>{
    console.log("Servidor corriendo en el puerto http://localhost:3030")
});

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});
