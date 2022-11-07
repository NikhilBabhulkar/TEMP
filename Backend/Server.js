const express = require("express")
const dotent = require("dotenv").config()
const con = require("./ConnectDB")
const bodyParser = require("body-parser")
const Student = require("./ConnectDB")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors)
app.get("/data", async (req, res) => {
    con.query("select * from Student", (err, result) => {
        console.log(result)
    })
})

app.post("/data", async (req, res) => {
    const id = req.body.id;
    const Name = req.body.Name;
    const Country = req.body.Country;
    const DOB = req.body.DOB;
    const Resume = req.body.Resume;
    console.log(req.body)
    // const post = req.body;
    // await con.create(post)
    // res.json(post)
    const sql = `INSERT INTO Student (id, Name,DOB,Country,Resume) VALUES(?,?,?,?,?)`
    con.query(sql, [id,Name, DOB, Country, Resume], (err, result) => {
        if (!err) {
            console.log("Data Added")
            console.log(result)
        } else {
            console.log(err)
        }
    })
})

const PORT = process.env.PORT || 8081

app.listen(PORT,()=>console.log(`Your Application is working on port ${PORT}`))