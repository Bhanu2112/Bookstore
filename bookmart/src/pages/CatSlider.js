import React, { useEffect, useState } from 'react'
import './CatSlider.css'
import CategoryCard from './CategoryCard'


export default function CatSlider() {

    const [categories, setCategories] = useState([])

   let cards = [1,2,3,4,5,6,7,8,9,10,11]

   useEffect(()=>{
    async function fectCategories(){
        const response = await fetch("http://localhost:8080/category/all");
        const data = await response.json();
        setCategories(data)
    }
    fectCategories()
   },[])

   console.log(categories);
   

    return (
        <>
            <div className="w-full max-w-full mx-auto overflow-hidden">
                <div className={` md:${categories.length < 9 ? 'justify-center' : 'justify-start'} flex overflow-x-auto cursor-grab py-2.5 mt-15 box-border  no-scrollbar`}>
                    {categories.map((cat) => (
                        <div className='card' key={cat.id}>
                            <CategoryCard category={cat} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
