import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../views/Home'

export default function Index() {
    return (
        <BrowserRouter>
           
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
