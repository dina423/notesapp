import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <div className="flex bg-gradient-to-t from-black to-slate-600  p-8 w-full">
            <div className="font-display  text-teal-300 text-xl w-1/2" >
                Notes  
            </div>
            <div className=" flex w-1/2  text-violet-300 space-x-8 ">
                <div>
               <Link to="/" className="hover:bg-slate-500 hover:bg-opacity-50 p-8">Home</Link>
               </div>
               <div>
               <Link to="/create" className="hover:bg-slate-500 hover:bg-opacity-50 p-8">Create</Link>
               </div>
               <div>
                {localStorage.getItem('user') ?  <div> {localStorage.getItem('user')}</div>: <div > login|Register<Link to="/login"></Link></div> }
               </div>
              
                    {localStorage.getItem('user') && <div> <Link to="/logout" className="hover:bg-slate-500 hover:bg-opacity-50 p-8">Logout</Link></div>  }
                    
            </div>
        </div>
    );
}
 
export default Navbar;