import { useState } from "react";
import api from "../api";
import {  Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Login from "../pages/Login";


function Form({route,method}){
    const [username,setusername] = useState("")
    const [password, setpassword] = useState("")
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method === "login" ? "Login" : "Register"

    const handleSubmit = async (e) =>{
        setLoading(true);
        e.preventDefault();

        try{
            const res = await api.post(route,{username,password})  
            if ( method === "login"){
                localStorage.setItem(ACCESS_TOKEN , res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                localStorage.setItem('user',username )
                localStorage.setItem('isloggedin',true)
                navigate("/")
                window.location.reload()
            }else {
                navigate("/login")
            }
        } catch(error){
            alert(error)
        } finally{
            setLoading(false)
        }
    };
    return(
        <form onSubmit={handleSubmit} className="text-green-500">
            <h1>{name}</h1>
            <input className="" type="text" value={username} onChange={(e) => setusername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
            <button type="submit"> {name} </button>

            <div>{method === 'login'  ? <div>not a user?<Link to="/register">register</Link></div>:<div><Link to="/login"></Link></div> }


            
            </div>
        </form>
    )
}

export default Form