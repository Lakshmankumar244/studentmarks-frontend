import axios from "axios"
import { useState, useEffect } from "react"

function StudentTable(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        const URL = 'http://localhost:8001'

        const token = localStorage.getItem('token')

        axios.get(URL + '/students',
            {
                headers:{
                    Authorization: `Bearer ${token}`
                } 
            },

        )
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])

    return(
        <table className="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Student First Name</th>
            <th scope="col">Student Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Department</th>
            <th scope="col">Section</th>
            </tr>
        </thead>
        <tbody>
                {
                    data.map(
                        (data,i)=>
                            <tr key={data.studentID}>
                                <td>{data.studentID}</td>
                                <td>{data.studentFirstName}</td>
                                <td>{data.studentLastName}</td>
                                <td>{data.gender}</td>
                                <td>{data.mobile}</td>
                                <td>{data.email}</td>
                                <td>{data.department}</td>
                                <td>{data.section}</td>
                            </tr>
                    )
                }
        </tbody>
        </table>
    )
}

export default StudentTable

