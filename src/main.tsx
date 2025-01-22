import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import Home from './redux/features/products/pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<div>Products Page</div>} />
          <Route path='/cart' element={<div>Cart Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
