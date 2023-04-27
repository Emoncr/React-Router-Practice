import React from 'react'
import Home from './Components/Home/Home'
import Details from './Components/Details/Details'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './Components/Error/Error'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home></Home>} />
        <Route exact path='/home' element={<Home></Home>} />
        <Route exact path='/User/:userId' element={<Details></Details>} />
        <Route exact path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App