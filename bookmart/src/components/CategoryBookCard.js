import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryBookCard({categoryBook}) {

    
   
    return (
        <Link to={`/book/detailes/${categoryBook.id}`}>
           <div className='w-40 mb-8 md:w-60 border-gray-400 rounded-xl shadow-lg transition-all duration-700 hover:scale-110'>
            <div className='max-w-sm overflow-hidden  bg-white bg-clip-border text-gray-700  dark:bg-gray-800 dark:border-gray-700'>
                <div className='object-cover h-56 md:h-72'>
                  
                    <img className='object-fit h-full w-full' src={`${categoryBook?.volumeInfo?.imageLinks?.thumbnail}`+'&fife=w800'} alt="" />

                </div>
                <div className='p-3 border-t-2 border-gray-300'>
                    <h5 className='mb-2 text-[13px] font-serif font-semibold tracking-tight text-gray-900 dark:text-white'>{categoryBook?.volumeInfo?.title}</h5>
                </div>
            </div>
        </div>
        </Link>
     
    )
}
