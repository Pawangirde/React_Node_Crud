import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

function Data() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/data")
            .then(res => {
                // console.log(res.data);
                setData(res.data); // Store fetched data in state

            })

    }, []);

    const confirmDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            handleDelete(id);
        }
    }

    function handleDelete(id) {
        axios.delete("http://localhost:8082/delete/" + id)
            .then(res => {

                window.location.reload();

            })

    }

    function confirmUpdate(id, name, emp_code, salary) {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("emp_code", emp_code)
        localStorage.setItem("salary", salary)
    }

    const history = useNavigate();
    function Goback() {

        history("/insert")
    }

    return (
        <>
            <div className='container'>
                <h1>Show Data</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Emp.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Emp_Code</th>
                            <th scope="col">Salary</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <td >{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.emp_code}</td>
                                <td>{item.salary}</td>
                                <td>
                                    <button type="button" className="btn btn-warning" onClick={() => confirmDelete(item.id)}> Delete </button>
                                </td>
                                <td>
                                    {/* {/* <Link to={`/update/${item.id}`} className="btn btn-primary">Update Data</Link>   */}
                                    <Link to={`/update/${item.id}`} ><button type="button" className="btn btn-success" onClick={() => confirmUpdate(item.id, item.name, item.emp_code, item.salary)}> Update Data </button>
                                    </Link>
                                </td>
                  
                                <td>
                                    <a href="http://localhost:3000/insert" className="btn btn-outline-info" onClick={Goback} > Insert Data </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Data;
