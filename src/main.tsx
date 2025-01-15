import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
  <Routes>
    <Route element={<App />} >
      <Route path='/' element={<div>Home</div>} />
      <Route path='/products' element={<div>Products Page</div>} />
      <Route path='/cart' element={<div>Cart Page</div>} />
    </Route>
  </Routes>
</BrowserRouter>
);
