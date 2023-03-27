import {Link} from 'react-router-dom';
import { UserAuth } from '../context/authContext';

function Navbar() {

  const {user , logOut} = UserAuth();

  async function handleLogOut (){
    if(window.confirm('are you sure you want to log out?')){
      await logOut();
    }
  }

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full" >
      <Link to='/'>
        <h1 className="text-red-600 text-lg md:text-4xl font-bold cursor-pointer">NETFLIX</h1>
      </Link>
        <div className="">

          {
            user?.email ? 
            <>
            (<Link to='/account'>
            <button className="text-white pr-4">Account</button>
          </Link>
          {/* <Link to='/sign-up'> */}
            <button onClick={handleLogOut} className="bg-red-600 py-1 px-3 md:px-6 md:py-2 rounded-lg cursor-pointer text-white">logOut</button>
          {/* </Link>  */}
          )</>:<> (          <Link to='/sign-in'>
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to='/sign-up'>
            <button className="bg-red-600 py-1 px-3 md:px-6 md:py-2 rounded-sm cursor-pointer text-white">Sign Up</button>
          </Link> )</> 
          }
        </div>
    </div>
  )
}

export default Navbar;   
