import { useQuery,useQueryClient } from "react-query";
import Movie from "./Movie";
import { MdChevronLeft,MdChevronRight } from "react-icons/md";
import { useRef } from "react";

export default function Row ({title,fetchFunction,rowID}){

    const queryclient = useQueryClient();
    const {isLoading,isError,data} = useQuery(`${title}`,fetchFunction);

    // const sliderRef = useRef();
    // const sliderRightRef = useRef();
    // console.log(sliderRef.current);

    const scrollLeft = () =>{
        // sliderRef.scrollLeft -= 500;
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const scrollRight = () =>{
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    // console.log(sliderRef.scrollLeft);
    
    return(
    <>
        <h2 className="text-white font-bold md:text-xl p-4 ">{title}</h2>
        <div className="relative flex items-center overflow-x-scroll group">
            <MdChevronLeft onClick={scrollLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden"/>
            <div id={'slider' + rowID }  className="w-full h-full overflow-x-scroll scroll-smooth relative !scrollbar-hide whitespace-nowrap">
                {
                    data?.results.map((movie,id)=>(
                       <Movie {...movie} id={id} key={id} />
                    ))
                }
            </div>
            <MdChevronRight size={40} onClick={scrollRight} className="bg-white hidden right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block" />
        </div>
    </>
        )
}