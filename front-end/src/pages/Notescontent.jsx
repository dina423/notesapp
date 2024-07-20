import { forwardRef, useEffect,useState} from "react";
import useFetch from "../customhooks/useFetch";
import { useParams ,useNavigate,Link } from "react-router-dom";
import api from "../api";



const Notescontent = () => {
     const[title]=useState()
     const[body]=useState()
     const navigate=useNavigate()
     const {id} = useParams()
     const {notes}=useFetch('http://127.0.0.1:8000/notesapp/viewnote/' )   
     let remove = async ()=>{
          let response = await fetch(`http://127.0.0.1:8000/notesapp/delete/${id}`,{
          method:'DELETE',
          } )
          let data= await response.json()
          alert(data['status'])
     }

     const handleDelete= (e)=>{
          remove()
          navigate('/')
     }


    return ( 
        <div className="mx-20 " >
             {notes.map((element)=>{
                    if(element.id == id){
                    return <div key={element.title} >
                         <div className="text-teal-400 text-xl font-bold ">{element.title}</div>
                         <div>{element.body}</div>
                         <div className="">{element.created_at}</div>
                         <button type='button' onClick={handleDelete} className="p-5 ">delete</button>
                         <Link to='/update'>update</Link>
              
                    </div>
                    }
                    
             })}

        </div>
     );
}
 
export default Notescontent;