import express, { query } from 'express'
import mysql from "mysql"
import cors from "cors"
import parser from "body-parser"
const app = express();

app.use(express.json());

app.use(parser.urlencoded({ extended: true }))
app.use(cors());

app.use(cors({ origin: 'http://localhost:3000' }));


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee"
})

db.connect((err) => {
    console.log("database connected");
})

app.get("/data", (req, res) => {

    db.query("select * from employee", (err, result) => {
        if (err) throw err;
        res.send(result);

    })
})
app.post("/empdata/:id", (req, res) => {
    const id=req.params.id;
    db.query("select * from employee where id=?",[id], (err, result) => {
        if (err) throw err;
        res.send(result);

    })
})
app.post("/insert", (req, res) => {
    const { name, emp_code, salary } = req.body;
    // console.log(name, emp_code, salary );

    const query = "insert into employee (name,emp_code,salary)values(?,?,?)"
    db.query(query, [name, emp_code, salary], (err, result) => {
        if (err) throw err;
        // res.send(result);
        res.send("Data added successfully");
        res.send(req.data);


    })
})


// final update
app.post("/update/:id", (req, res) => {

    const { name, emp_code, salary } = req.body;
    const id = req.params.id;

    const updateQuery = "update employee set name=?, emp_code=?, salary=? where id=?";

    db.query(updateQuery, [name, emp_code, salary, id], (err, rows) => {
        if (err) throw err;
        res.json({ message: "Data Updated successfully" });
    });
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id; // Assuming the ID is sent in the request body

    // const query = ;
    db.query(`DELETE FROM employee WHERE id= ?`, [id], (err, result) => {
        if (err) throw err;
        res.json({ message: "Data deleted successfully" });
    });
});


app.listen(8082, () => {
    console.log("server started");

})