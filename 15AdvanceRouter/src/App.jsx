import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Products from './pages/products';
import Maleprod from './pages/maleprod';
import Femaleprod from './pages/femaleprod';

const App = () => {
  return (
< >
  <div className='h-screen bg-black text-amber-50'>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/products/male' element={<Maleprod/>}></Route>
    <Route path='/products/female' element={<Femaleprod/>}></Route>
  </Routes>
  <Footer/>
  </div>
</>
  );
}

export default App;
