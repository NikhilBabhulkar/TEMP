const mysql = require("mysql")

const con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12550007",
  password: "sgA7xudXZJ",
  database: "sql12550007",
});

// CREATE TABLE Student (id INT, Name VARCHAR(500),DOB VARCHAR(500),Country VARCHAR(500),Resume VARCHAR(500))
// INSERT INTO Student (id, Name,DOB,Country,Resume) VALUES(1,"NIkhil B","20/09/2000","India","http:linkofresume")

con.connect((err) => {
    if (!err) {
        console.log("COnnected done");  
    } else {
        console.log(err)
    }
})

module.exports = con