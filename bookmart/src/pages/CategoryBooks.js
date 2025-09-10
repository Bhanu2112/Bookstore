import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CatImg from '../asserts/pexels-susan-flores.jpg'
import CategoryBookCard from '../components/CategoryBookCard'

export default function CategoryBooks() {
    const [categoryBooks, setCategoryBooks] = useState([])
    const [category, setCategory] = useState()
    const params = useParams();

    useEffect(() => {
        const fetchCategory = async () => {
            console.log(params.category);
            const response = await fetch(`http://localhost:8080/categories/category/${params.category}`);
           try {
            const data = await response.json() ;
            setCategory(data)
           } catch (error) {
            // const data = await response.json() ;
            setCategory([])
           }
            
        }
        fetchCategory()
    }, [params.category])

    useEffect(() => {
        const fetchCatBooks = async () => {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${params.category}&maxResults=30`)
            const data = await response.json();
            setCategoryBooks(data.items)
        }
        fetchCatBooks()
    }, [params.category])



    return (
        <>
            <div className='border-gray-200 rounded-lg shadow p-10 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                {
                    category !== null ? 
                    <div className='flex items-center justify-center '>
                        <div className=" justify-between p-4 leading-normal w-[50%]">
                            <h5 className="mb-2 text-1px md:text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white">{category?.name}</h5>
                            <p className="mb-3 text-[10px] md:text-[16px] font-normal font-mono text-gray-700 dark:text-gray-400 xl:px-32">{category?.description}</p>
                        </div>
                        <img className=" md:h-auto w-48   md:w-96 md:rounded-none md:rounded-s-lg" src={category?.category_img} alt="" />
                    </div>
                     : 
                     <div className='flex items-center justify-center '>
                        <div className=" justify-between p-4 leading-normal w-[50%]">
                            <h5 className="mb-2 text-1px md:text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white">{params.category}</h5>
                            <p className="mb-3 text-[10px] md:text-[16px] font-normal font-mono text-gray-700 dark:text-gray-400 xl:px-32">teheb</p>
                        </div>
                        <img className=" md:h-auto w-48   md:w-96 md:rounded-none md:rounded-s-lg" src='' alt="" />
                    </div> 
                }


            </div>
            <main className='my-4'>
                <div className={`flex flex-wrap ${categoryBooks?.length < 5 ? 'justify-center gap-3' : 'justify-between'}`}>

                    {
                        categoryBooks && categoryBooks.map((book) => (
                            <CategoryBookCard key={book.id} categoryBook={book} />
                        ))
                    }

                </div>
            </main>





        </>
    )
}
