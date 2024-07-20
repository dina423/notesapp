import { useState,  } from "react"
import { useNavigate } from "react-router-dom"


const NotesUpdate = () => {
    const[title,setTitle]=useState()
    const[body,setBody]=useState()
    const navigate = useNavigate()
    
    let update = async ()=>{
        let obj = {
            'title':title,
            'body':body
        }
      
        let response = await fetch(`http://127.0.0.1:8000/notesapp/update/`,{
            method:'PUT',
            headers:{'Content-Type':'application/json' },
            body:JSON.stringify(obj)
   
        } )

        let data= await response.json()
        console.log(data['status'])

    } 

    const handlesubmit = (e)=>{
        e.preventDefault()
        update()
        navigate('/')

    }


    return ( 
        <form onSubmit={handlesubmit} className="">
         <label className="">Title</label><input type="text"  onChange={(e)=> setTitle(e.target.value)}/>
        <label className="">Body</label><input type="textarea"  onChange={(e) => setBody(e.target.value)}/>
            <input type="submit" />
        </form>
     );
}
 
export default NotesUpdate;