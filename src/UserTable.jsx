import { useEffect, useState } from "react"
import axios from "axios"
import { Navigate } from "react-router-dom";

function UserTable(){

    const URL="http://localhost:8001"
    const [data, setData] = useState([]);

    useEffect(()=>{
        const token = localStorage.getItem("token")

       axios.get(URL + "/users",{
        headers:{
            Authorization: `Bearer ${token}`
        }
       })
       .then(res => setData(res.data))
       .catch(err => console.log(err)
       )
    },[])

    return(
        <div>
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Username</th>
      <th scope="col">isStudent</th>
      <th scope="col">isActive</th>

    </tr>
  </thead>
  <tbody>
        {
            data.map((d,i)=>(
                <tr key={i}>
                    <td>{d.username}</td>
                    <td>{d.isStudent?"Yes":"No"}</td>
                    <td>{d.isActive?"Yes":"No"}</td>
                    <td><button type="submit" onClick={<Navigate to={'/update/user/'}/>}>Edit</button></td>
                </tr>
            ))
        }
  </tbody>
</table>
        </div>
    )
}

export default UserTable