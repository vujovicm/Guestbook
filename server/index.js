const express = require('express');
const app = express();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "majamaja", 
    database: "guestbookdb",
});

db.connect(function(err){
    if (err) console.log("No conn");
    else console.log("Conected");
})

app.get("/", (req, res) => {

    const sqlInsert = "INSERT INTO guests (name, message) VALUES ('maja', 'test');";
    db.query(sqlInsert, (err, result) => {
        if (err) console.log('err');
        if (result) console.log(result)
        res.send("hello world1");
    });
});

app.listen(3001, () => {
    console.log('listening on 3001');
});