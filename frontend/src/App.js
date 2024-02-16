import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import ShowallBooks from './pages/ShowallBooks'
import EditBooks from './pages/EditBooks'
import DeleteBook from './pages/DeleteBook'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/create' element={<CreateBooks/>}/>
        <Route path='/books/details/:id' element={<ShowallBooks/>}/>
        <Route path='/books/edit/:id' element={<EditBooks/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      </Routes>

      </BrowserRouter>
       
      
    </div>
  )
}

export default App
