import React from 'react'
import {Link } from 'react-router-dom'
import useFetch from '../customhooks/useFetch'
import { jwtDecode } from 'jwt-decode'
import { REFRESH_TOKEN } from '../constants'


const Home = () => {

  let decode=null


  let {notes}= useFetch('http://127.0.0.1:8000/notesapp/viewnote/')


  console.log(notes)
 
  if(localStorage.getItem('isloggedin')){
    
    decode=jwtDecode(localStorage.getItem(REFRESH_TOKEN))
    
  }
  return (
    <div className='bg-black h-dvh '>
        {notes.map((element)=>{
      if(localStorage.getItem('isloggedin')){
        if(element.user === decode['user_id']){
        
           return <Link to= {`/notescontent/${element.id}`}><div key={element.id} className=''>
             <div className=' hover:shadow-2xl text-teal-400 items-stretch  bg-black hover:bg-gradient-to-b from-black  to-violet-400 font-semibold font-display text-xl hover:shadow-slate-800 mx-80 mt rounded-lg py-5 text-center ' >{element.title} </div>
              
           
           
           </div>
           </Link>
         
        }}

})} 
        
    </div>
  )
}

export default Home