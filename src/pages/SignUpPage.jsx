import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { UserAuth } from '../context/authContext';


function SignUpPage() {

  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {user,signUp} = UserAuth();
  console.log(email,password);

  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(!email && !password) return;

    try {
      await signUp(email,password)
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="w-full h-screen">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/6d18e1d5-258b-4181-82e8-75d9b241d7ea/NG-en-20230320-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="netflix signup page image" className='hidden sm:block absolute w-full h-full object-cover' />
        <div className=" bg-black/60 fixed left-0 top-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-[50]">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75  text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className='font-bold text-3xl '>Sign Up</h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4 '>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='p-3 my-2 bg-gray-700 rounded ' type="email" placeholder='Email' autoComplete='email' required/>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='p-3 my-2 bg-gray-700 rounded ' type="password" placeholder='Password' autoComplete='current-password' required />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className="flex justify-between items-center text-gray-600 text-sm ">
                  <p ><input className='mr-2' type="checkbox"  />Remember me</p>
                  <p>Need Help?</p>
                </div>
                  <p className='py-8 space-x-2'><span className='text-gray-600'>Already Subscribed to Netflix?</span><Link to='/sign-in' > Sign In</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage