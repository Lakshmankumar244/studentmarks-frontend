// import axios from "axios";
// import { useState } from "react";

// function Login(){

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async () => {

//     const formData = new URLSearchParams();
//     formData.append("username",username);
//     formData.append("password",password);

//     const URL = "http://localhost:8001"

//     const response =await axios.post(
//         URL + "/auth/token",
//         formData,
//         {
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             }
//         }
//     )
//     console.log(response.data)
//     // const token = response.data.access_token
//     // localStorage.setItem("token",token)
// }
//     return(
//         <form onSubmit={handleSubmit}>
//             <h2>Login</h2>
//             <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
//             <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
//             <button type="submit">Login</button>
//         </form>
//     )
// }


// export default Login


import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await axios.post(
        "http://localhost:8001/auth/token",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response.data);

      const token = response.data.access_token;
      localStorage.setItem("token", token);
      navigate('/users');
    } catch (err) {
      console.error("Login failed", err.response?.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="userPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="userPassword" value={password} onChange={e => setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  );
}

export default Login
