import './App.css';
import Home from './components/home/home.js';
import UserRegistry from './components/user-registry/userRegistry.js'
import ProductDetail from './components/product-detail/productDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import { ProtectedRoute } from './components/protected-routes/protected-routes';
import { useState } from 'react';


const  App = ()  => {
  const [isAllowed, setIsAllowed] = useState(false)
  
  const getUserAllowed = (value) => {
    if(value === '') {
      setIsAllowed(false)
    } else {
      setIsAllowed(true)
    }
  }

  return (
    <>  
     <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute isAllowed={isAllowed}/>}>
              <Route path='/administracion' element={<Home />}></Route>
          </Route>
          <Route path='/login' element={<UserRegistry  sendDataUser={getUserAllowed}/>}></Route>
          <Route path='/' element={<ProductDetail />}></Route>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;