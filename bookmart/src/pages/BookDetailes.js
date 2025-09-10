import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function BookDetailes() {

    const [book, setBook] = useState();

    const params = useParams();

    useEffect(() => {
        async function getBookDetailes() {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
            const data = await response.json()
            setBook(data)
        }
        getBookDetailes()
    }, [])

    console.log(book);

    const authors = book?.volumeInfo?.authors

    return (
        <main>
            <div>
                <div className='items-center flex flex-col justify-center'>
                    <img src={`${book?.volumeInfo?.imageLinks.thumbnail}` + '&fife=w500'} alt="" />
                    <h1 className='mb-4 text-2xl font-extrabold tracking-tight text-gray-900 lg:font-extrabold lg:text-4xl lg:leading-none dark:text-white lg:text-center xl:px-36 lg:m-7'>{book?.volumeInfo?.title}</h1>
                </div>
                <div className='sm:ml-32 sm:mt-5 text-left justify-start flex flex-col'>
                    <h1 className='text-md sm:text-3xl m-2 font-mono' > <span className=' font-bold '>Title :</span> {book?.volumeInfo?.title}</h1>
                    <h2 className='m-2 font-mono'>
                        <span className='text-md items-center flex font-semibold'>Author :

                            {
                                authors && authors.map((a, index) => (

                                    <p key={index} className='ml-2 border font-normal border-gray-200 rounded p-2 dark:border-gray-600'>{a}</p>
                                ))
                            }

                        </span>
                    </h2>
                    <div className='m-2 font-mono '>
                        <span className='text-1xl font-sans font-semibold'>Summary :</span>
                        <p dangerouslySetInnerHTML={{ __html: book?.volumeInfo?.description }}></p>

                    </div>
                    <span className='m-2' >
                        <div className='text-md items-center flex flex-wrap font-mono font-semibold'>Genre : {
                            book?.volumeInfo?.categories && book?.volumeInfo?.categories.map((a, index) => (

                                <div key={index} className='ml-2 flex  font-normal text-[8px] md:text-[14px] border  border-gray-200 rounded p-2 dark:border-gray-600'>{
                                    a.split("/").map((k, i) => (
                                        <div key={i} className='flex felx-wrap '>
                                            <Link  to={`/category/${k}`} className='mx-2 text-blue-900 dark:text-blue-500'>{k}</Link>
                                            { i < a.split("/").length - 1 ? ">": ""}
                                        </div>

                                    ))
                                }</div>
                            ))
                        } </div>
                    </span>

                    <p className='m-2 font-mono'> <span className='text-1xl font-semibold'>Language : </span> {book?.volumeInfo?.language}</p>
                    <p className='m-2 font-mono'> <span className='text-1xl font-semibold'>Published Date :</span>  {book?.volumeInfo?.publishedDate}</p>
                    <p className='m-2 font-mono'> <span className='text-1xl font-semibold'>Publisher : </span> {book?.volumeInfo?.publisher}</p>
                    <p className='m-2 font-mono'> <span className='text-1xl font-semibold'>Page Count :</span>{book?.volumeInfo?.printedPageCount}</p>

                    <div className='m-2 items-center flex-wrap flex ' >
                        <p className='text-1xl  font-mono font-semibold'>ISBN Identifiers : </p>
                        {
                         book?.volumeInfo?.industryIdentifiers &&   book?.volumeInfo?.industryIdentifiers.map((i, index) => (
                                <p key={index} className='ml-2 font-normal text-[8px] md:text-[14px] border  border-gray-200 rounded p-2 dark:border-gray-600'>{i.type} : {i.identifier}</p>

                            ))
                        }

                    </div>


                </div>

            </div>
        </main>
    )
}
