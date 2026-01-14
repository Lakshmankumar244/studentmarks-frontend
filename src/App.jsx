import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserTable from './UserTable'
import Login from './Login.jsx'



function App() {

  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/auth/token' element={<Login/>}></Route>
          <Route path='/users' element={<UserTable/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
