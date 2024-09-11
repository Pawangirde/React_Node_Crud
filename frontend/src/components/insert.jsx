import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import show from "./show"
import { Link } from 'react-router-dom';


const Create = () => {
    const [name, setName] = useState("")
    const [emp_code, setEmp_Code] = useState("")
    const [salary, setSalary] = useState("")
    const history = useNavigate()


    // const header={"Access-Control-Allow-Origin":"*"};

    const handleSubmit = (event) => {
        event.preventDefault();
       
        axios.post("http://localhost:8082/insert", {
            name: name, emp_code: emp_code, salary: salary
        })
        history("/show")
    }
    return (
        <>
            <div className='container'>
                <h1>Insert Data</h1>
                <form action='' method=''>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name :-</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value) }} required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Emp_Code :-</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" onChange={(e) => { setEmp_Code(e.target.value) }} required />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Salary :-</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" onChange={(e) => { setSalary(e.target.value) }} required/>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    <Link to="http://localhost:3000/show" className="btn btn-success">Show Data</Link>
                </form></div>
        </>
    )
}

export default Create
