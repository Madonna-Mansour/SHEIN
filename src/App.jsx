import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route , RouterProvider} from 'react-router-dom'
import { ProductsData} from './api/API'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Register from './auth/Register'
import Login from './auth/Login'
import Favorit from './pages/Favorit'



const Layout = ()=>{
  return(
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}



const App = () => {
   

  const router = createBrowserRouter(createRoutesFromElements(
    <Route >
     <Route path='/' element={<Layout />}>
          <Route index element={<Home />}  loader={ProductsData} />
     </Route>
     

     <Route path='cart' element={<Cart />} />
     <Route path='registr' element={<Register />} />
     <Route path='login' element={<Login />} />
     <Route path='favorit' element={<Favorit />} />

    </Route>
 )) 


  return (
    <div>
      <RouterProvider router={router} />

      
    </div>
  )
}

export default App