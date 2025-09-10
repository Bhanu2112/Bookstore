import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Home.css'

import CatSlider from './CatSlider';

export default function Home() {

 


  return (
    <main>
      <section className=''>
        <div className='py-4 bg-white dark:bg-gray-900 lg:pt-12 lg:pb-16'>
          <div className='px-4 mx-auto max-w-8xl lg:px-4 lg:text-center'>
            <h1 className='mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:font-extrabold lg:text-6xl lg:leading-none dark:text-white lg:text-center xl:px-36 lg:mb-7'>Bookmart the open mart for all books</h1>
            <p className='mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl xl:px-36'>Come for the books, stay for the stories. Let the words guide you on a journey. Escape the ordinary, dive into a book. Find refuge in the world of literature in our book mart.</p>

            <div>
              <a href="/" className='text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center'>Get Started</a>

            </div>
          </div>

        </div>
        <section>
          <CatSlider></CatSlider>
        </section>
      </section>
       


    </main>
  )
}
