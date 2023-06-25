import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { options } from '../requests';
import {MdChevronLeft} from 'react-icons/md'
import {MdChevronRight} from 'react-icons/md'

import Movie from './movie';

const Row = ({title, fetchUrl,rowId}) => {

    const [movies, setMovies] =useState([])

    useEffect(()=>{
        axios.get(fetchUrl, options).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchUrl])
    
    const slider= document.getElementById('slider' + rowId)

    const slideLeft=()=>{
        slider.scrollLeft -= 500;
    }
     
    const slideRight=()=>{
        slider.scrollLeft += 500;
    }

    return (
        <>
        <h2 className=' text-white font-bold p-4 md:text-xl lg:text-2xl'>{title} </h2>
            <div className=' relative flex items-center group '>
                <MdChevronLeft onClick={slideLeft}  className=' bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 absolute z-10 left-0  hidden group-hover:block' size={40} />
                <div id={"slider" + rowId} className=' w-full h-full overflow-x-scroll whitespace-nowrap
                scroll-smooth  scrollbar-hide  relative'>
                    {
                        movies.map((item, id)=>(
                          <Movie item={item} key={id} />
                        ))
                    }
                </div>
                <MdChevronRight onClick={slideRight} className=' bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 absolute z-10 right-0 hidden group-hover:block' size={40} />
            </div>
        </>
    );
}

export default Row;
 