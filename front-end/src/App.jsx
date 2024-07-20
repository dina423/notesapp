import React, { useEffect } from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes,  useNavigate, } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Create from './pages/Create';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './pages/Navbar.jsx';
import Notescontent from './pages/Notescontent.jsx';
import NotesUpdate from './pages/Notesupdate.jsx';

function Logout(){
  localStorage.clear()
  let navigate=useNavigate()
  useEffect(()=>{
    navigate('/')
    window.location.reload()
    })
  

}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}

function App() {
  return(


   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <ProtectedRoute><Home/></ProtectedRoute> } />
      <Route path ="/login" element={<Login/>} />
      <Route path ="/logout" element={<Logout/>} />
      <Route path="/update" element={<ProtectedRoute><NotesUpdate/></ProtectedRoute>}/>
      <Route path ="/register" element={<RegisterAndLogout/>}/>
      <Route path = "/create" element={<ProtectedRoute><Create/></ProtectedRoute>}/>
      <Route path="/notescontent/:id" element={<ProtectedRoute><Notescontent/></ProtectedRoute>}/>
      <Route path ="*" element={<NotFound/>}/>  

    </Routes>
   </Router>
    
  );
}

export default App;
  