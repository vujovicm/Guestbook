const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser= require('body-parser');
const cors = require('cors');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "majamaja", 
    database: "guestbookdb",
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM guests ORDER BY id desc LIMIT 10;"; 

    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
});

app.post("/api/insert", (req, res) => {
    const name = req.body.name;
    const message = req.body.message;

    const sqlInsert = "INSERT INTO guests (message, name) VALUES (?,?);";
    db.query(sqlInsert, [message, name], (err, result) => {
        res.send(result);
    });
});

app.get("/", (req, res) => {
    res.send("This is server");
});

app.listen(3001, () => {
    console.log('listening on 3001');
});