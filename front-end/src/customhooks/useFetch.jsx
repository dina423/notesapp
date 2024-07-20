import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url)=>{
    let [notes, setnotes] = useState([])
    useEffect(()=>{
        axios.get(url).then(response => setnotes(response.data)).catch(error => console.log(error))
    },[url])
    return {notes}
}
export default useFetch;