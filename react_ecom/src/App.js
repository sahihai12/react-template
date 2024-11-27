import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './Components/About';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Header from './Components/Header';
import Home from './Components/Home';
import Products from './Components/Products';
import ProductSingle from './Components/ProductSingle';

const App = () => {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductSingle />} />
          <Route path='*' element={<Error />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App