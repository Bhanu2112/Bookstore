import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CategoryBookCard from '../components/CategoryBookCard';

export default function SearchPage() {

    const [books, setBooks] = useState([])

    const [searchParams] = useSearchParams();

    const queryTerm = searchParams.get('q')

    console.log(queryTerm);
    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${queryTerm}&maxResults=40`);
            const data = await response.json();
            setBooks(data.items)
        }
        fetchBooks()
    }, [queryTerm])

    return (
        <>
            <div className='border-gray-200 rounded-lg shadow p-10 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                <div className='flex items-center justify-center '>
                    <div className=" justify-between p-4 leading-normal w-[50%]">
                        <h5 className="mb-2 text-1px md:text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white">Books That Match Your Search Criteria</h5>
                        <p className="mb-3 text-[10px] md:text-[16px] font-normal font-mono text-gray-700 dark:text-gray-400 xl:px-32">{queryTerm}</p>
                    </div>
                    {/* <img className=" md:h-auto w-48   md:w-96 md:rounded-none md:rounded-s-lg" src={category?.category_img} alt="" /> */}
                </div>
            </div>
            <main className='my-4'>
                <div className={`flex flex-wrap ${books?.length < 5 ? 'justify-center gap-3' : 'justify-between'}`}>
                    {
                        books && books.map((book) => (
                            <CategoryBookCard key={book.id} categoryBook={book} />
                        ))
                    }

                </div>
            </main>
        </>
    )
}
