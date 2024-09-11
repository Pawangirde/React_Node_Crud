import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Update = () => {
    const [name, setName] = useState("")
    const [emp_code, setEmp_Code] = useState("")
    const [salary, setSalary] = useState("")
    const history = useNavigate()
    const { id } = useParams();


    useEffect(() => {
        setName(localStorage.getItem("name"));
        setEmp_Code(localStorage.getItem("emp_code"));
        setSalary(localStorage.getItem("salary"));
    }, []);


    const handleUpdate = (event) => {
        event.preventDefault();


        axios.post("http://localhost:8082/update/" + id, {

            name: name, emp_code: emp_code, salary: salary
        })
            .then(res => {
                history("/show")

            }).catch(error => {
                console.error('Error updating data:', error);
            });
    }


    return (
        <>
            <div className='container'>
                <h1>Update Data</h1>
                <form >
                    {/* <input type="hidden" className="form-control" aria-describedby="emailHelp" value={id}  required/> */}


                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name :-</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Emp_Code :-</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" value={emp_code} onChange={(e) => { setEmp_Code(e.target.value) }} />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Salary :-</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" value={salary} onChange={(e) => { setSalary(e.target.value) }} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>


                    <Link to="http://localhost:3000/show" className="btn btn-success">Show Data</Link>
                </form></div>
        </>
    )

}


export default Update
