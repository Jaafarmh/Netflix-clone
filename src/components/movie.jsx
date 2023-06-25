import {FiHeart} from 'react-icons/fi'
import {AiFillHeart} from 'react-icons/ai'
import { useState } from 'react';
import { UserAuth } from '../context/authContext';
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

const Movie = ({item}) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const {currentUser} = UserAuth();

    const movieRef= doc(db,'users',`${currentUser?.email}`)

    const saveShow = async()=>{
    
        if(currentUser?.email){
            setLike(!like)
            setSaved(true)
            await updateDoc(movieRef,{
                savedShowes : arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path 
                })
            })
        }  
          else  alert('Please log in to save a movie')
          
    }
    return (
        <div className=" relative inline-block p-2 cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px]
         xl:w-[350px]  ">
        <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        
        <div className=' absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100
          text-white '>
            <p className=' text-xs md:text-sm font-bold flex justify-center items-center h-full'>{item?.title}</p>

            <p onClick={saveShow}
            className=' absolute top-4 left-4 text-gray-300 text-xl'>
                {like ? <AiFillHeart /> : <FiHeart />}
            </p>
        </div>
    </div>
    );
}

export default Movie;
