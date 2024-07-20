import { useEffect, useState } from "react";
import Navbar from "./Navbar";


const Create=() => {

    <Navbar/>
    const [title,setTitle]= useState("")
    const [body,setBody] = useState("")

    let Add = async ()=>{
        let obj = {
            'user':localStorage.getItem('user'),
            'title':title,
            'body':body
        }
        let response = await fetch("http://127.0.0.1:8000/notesapp/create/",{
            method:'POST',
            headers:{'Content-Type':'application/json' },
            body:JSON.stringify(obj)
        } )

        let data= await response.json() 
        alert(data['status'])

    } 

    const  handlesubmit=async(e)=>{
        e.preventDefault();

            Add()


    }

    return (  
        <form onSubmit={handlesubmit} className="">
         <label className="">Title</label><input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <label className="">Body</label><input type="textarea"  value={body} onChange={(e) => setBody(e.target.value)}/>
            <input type="submit" />
        </form>
    );
}
 
export default Create;