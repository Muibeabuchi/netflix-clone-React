import { useState,useEffect } from "react";
import { MdChevronLeft,MdChevronRight } from "react-icons/md";
import {AiOutlineClose} from 'react-icons/ai';
import { UserAuth } from "../context/authContext";
import { db } from "../firebase.config";
import { onSnapshot,doc,updateDoc } from "firebase/firestore";

function  SavedShows() {

    const [movies,setMovies] = useState([]);
    const {user} = UserAuth();

    const movieRef = doc(db,'users',`${user?.email}`)

    async function deleteShow (passedId){
        try {
            const result = movies?.filter(item => item.id !== passedId)
            await updateDoc(movieRef,{
                savedShows:result,
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows);
        })
    },[user?.email])

    const scrollLeft = () =>{
        // sliderRef.scrollLeft -= 500;
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const scrollRight = () =>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <div>
                <h2 className="text-white font-bold md:text-xl p-4 ">My Shows</h2>
        <div className="relative flex items-center overflow-x-scroll group">
            <MdChevronLeft onClick={scrollLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden"/>
            <div id={'slider'}  className="w-full h-full overflow-x-scroll scroll-smooth relative !scrollbar-hide whitespace-nowrap">
                {
                    movies?.map(({id,img,title})=>(
                    <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative inline-block p-2 ">
                            <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title}  className="w-full h-auto block"/>
                            {/* <p  > */}
                                <AiOutlineClose onClick={()=>deleteShow(id)} className="  right-0 top-0 absolute text-gray-300 cursor-pointer  "/>
                            {/* </p> */}

                            <div className="absolute transition ease-in duration-150  top-0 left-0 w-full h-full opacity-0 hover:bg-black/80  hover:opacity-100 text-white ">
                                <p className="font-bold text-xs whitespace-normal h-full md:text-sm flex items-center justify-center  " >{title}</p>
                            </div>
                    </div>
                    
                    ))
                }
            </div>
            <MdChevronRight size={40} onClick={scrollRight} className="bg-white hidden right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block" />
        </div>

    </div>
  )
}

export default SavedShows;