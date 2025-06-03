import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorit, clearFavorit} from '../redux/appSlice'
import { FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Favorit = () => {

    const products = useSelector((state) => state.appReducer.favorit)
    const dispatch = useDispatch()
    if(products.length ===0){
        return(
      <div className="flex justify-center items-center h-[100vh]">
          <h1 className='t sm:text-[20px] md:text-[30px] mr-4'>There are no favorite products, go to browse products </h1>
          <Link to={"/"} className='text-[40px]'> <FaShopify /></Link>  
      </div>
        )
    }

  return (
       <div className="h-[100vh] pt-40">
            <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                 {products.map((product) => (
                   <div key={product.id}  className="flex flex-col justify-between box-content  p-4  mb-4 bg-white rounded-lg shadow-md">
                         <h1>{product.title}</h1>
                         <div className="">
                           <img className='w-[100px] my-6' src={product.image} alt="" />
                         </div>
                         <p className='font-bold'>Price: {product.price } LE</p>
                    <button className='border border-red-600 p-2 w-[150px] text-center my-4 hover:bg-red-500' onClick={() => dispatch(removeFromFavorit(product.id))}>remove</button>
                   </div>
                 ))}
            </div>
             <button className='fixed bottom-0 w-[100%] text-white font-bold h-[50px] bg-red-500' onClick={() => dispatch(clearFavorit())}>Clear</button>
          </div>
  )
}

export default Favorit