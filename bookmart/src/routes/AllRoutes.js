import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CategoryBooks from '../pages/CategoryBooks'
import SearchPage from '../pages/SearchPage'
import BookDetailes from '../pages/BookDetailes'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:category' element={<CategoryBooks/>}/>
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/book/detailes/:id' element={<BookDetailes/>}/>
    </Routes>
  )
}
