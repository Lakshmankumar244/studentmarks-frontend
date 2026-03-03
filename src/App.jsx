import './App.css'
import {BrowserRouter,Routes, Route, Navigate, replace} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserTable from './UserTable'
import Login from './Login.jsx'
import StudentTable from './StudentTable.jsx'



function App() {


  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/auth/token'} replace/>}></Route>
          <Route path='/auth/token' element={<Login/>}></Route>
          <Route path='/users' element={<UserTable/>}> </Route>
          <Route path='/students'element={<StudentTable/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
