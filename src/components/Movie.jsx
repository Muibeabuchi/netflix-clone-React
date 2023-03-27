import { useState } from "react";
import {FaHeart,FaRegHeart} from 'react-icons/fa';
import {db} from '../firebase.config';
import {UserAuth} from '../context/authContext';
import { arrayUnion,updateDoc,doc } from "firebase/firestore";


function Movie({title,id,backdrop_path}) {

    const [like,setLike] = useState(false);
    const [saved,setSaved] = useState(false);
    const {user} = UserAuth();

    const movieId = doc(db,'users', `${user?.email}`);

    const saveShow = async () =>{
      if(user?.email){
        setLike(!like);
        setSaved(true);
        await updateDoc(movieId,{
          savedShows:arrayUnion({
            id,
            title,
            img:backdrop_path,
          })
        })
      }else{
        alert('Please log in to save a movie');
      }
    } 

  return (
    <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative inline-block p-2 ">
    <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title}  className="w-full h-auto block"/>
    <div className="absolute transition ease-in duration-150  top-0 left-0 w-full h-full opacity-0 hover:bg-black/80  hover:opacity-100 text-white ">
        <p className="font-bold text-xs whitespace-normal h-full md:text-sm flex items-center justify-center  " >{title}</p>
        <p onClick={saveShow}>{ like ? <FaHeart className="absolute top-4 left-4 text-gray-300 " /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300 " />}</p>   
    </div>
</div>
  )
}

export default Movie