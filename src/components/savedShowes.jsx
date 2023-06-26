import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { doc, onSnapshot,updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import {AiOutlineClose} from 'react-icons/ai'
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../userSlice";
const SavedShowes = () => {
    const [movies, setMovies] =useState([])
    const currentUser = useSelector(selectCurrentUser)
    
    useEffect(()=>{
        onSnapshot(doc(db,'users',`${currentUser?.email}`),(doc)=>{
         setMovies(doc.data()?.savedShowes)
        })
    },[currentUser?.email])
           
    const slider= document.getElementById('slider')

    const slideLeft=()=>{
        slider.scrollLeft -= 500;
    }
     
    const slideRight=()=>{
        slider.scrollLeft += 500;
    }

    const movieRef=doc(db,'users',`${currentUser?.email}`)

    const removeShow =async (passedID)=>{
        try{
            const result=movies.filter((item)=> item.id !== passedID)
            await updateDoc(movieRef,{
                savedShowes : result
            })
        }catch(e) {
            console.log(e.message)
        }
    }
   
    return (
        <>
            <h2 className=' text-white font-bold p-4 md:text-xl lg:text-2xl'>My Shows </h2>
            <div className=' relative flex items-center group '>
                <MdChevronLeft onClick={slideLeft}  className=' bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 absolute z-10 left-0  hidden group-hover:block' size={40} />
                <div id={"slider" } className=' w-full h-full overflow-x-scroll whitespace-nowrap
                scroll-smooth  scrollbar-hide  relative'>
                    {
                        movies.map((item, id)=>(
                         <div key={id}
                         className=" relative inline-block p-2 cursor-pointer w-[160px] 
                        sm:w-[200px] md:w-[240px] lg:w-[300px] xl:w-[350px]  ">
                        <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                        
                        <div className=' absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100
                        text-white '>
                            <p className=' text-xs md:text-sm font-bold flex justify-center items-center h-full'>{item?.title}</p>
                        <p
                        onClick={()=>removeShow(item.id)}
                         className=" absolute top-4 right-4 text-gray-300 text-xl"><AiOutlineClose /></p>
                        </div>
    
                    </div>
                                    ))
                    }

                </div>
                <MdChevronRight onClick={slideRight} className=' bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 absolute z-10 right-0 hidden group-hover:block' size={40} />
            </div>
        </>
           
        
    );
}

export default SavedShowes;
