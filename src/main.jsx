import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './pages/Search.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='movies/:id' element={<Movies />} />
            <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
