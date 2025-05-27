import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,remove, clear} from '../redux/appSlice'
import { FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Cart = () => {
  const products = useSelector((state) => state.appReducer.products)
  const dispatch = useDispatch()
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)


if(products.length ===0){
    return(
      <div className="flex justify-center items-center h-[100vh]">
          <h1 className='text-[40px] mr-4'>The basket is empty, go to shopping </h1>
          <Link to={"/"} className='text-[40px]'> <FaShopify /></Link>  
      </div>
    )
}


  return (
     <div className="w-[100%] p-10 flex justify-between items-center grid grid-cols-1 md:grid-cols-2">
        <div className=''>
              <div className="">
                  <h1 className='font-bold text-[30px]'>ALL ITEMS</h1>
              </div>
            {products.map((product) => (
              <div key={product.id} className="mt-10 flex justify-start items-center border-b p-4">
                    <div className="">
                      <img className='w-[100px] h-[120px] mr-10' src={product.image} alt="" />
                    </div>
                    <div className="w-[100%]">
                        <h1>{product.title}</h1>
                        <div className="flex justify-between my-8">
                          <div className="flex flex-col">
                              <p>Price: {product.price * product.quantity} LE</p>
                              <p>Pec: {product.quantity}</p>
                          </div>
                            
                            <div className="flex">
                                <button onClick={() => dispatch(decrement(product.id))} className='w-10 border border-red-500 font-bold flex justify-center items-center text-red-500  hover:bg-red-500 hover:text-white '>-</button>
                                <button onClick={() => dispatch(increment(product.id))} className='w-10 border border-green-500 font-bold flex justify-center items-center mx-6 text-green-500  hover:bg-green-500 hover:text-white '>+</button>
                                <button onClick={() => dispatch(remove(product.id))}className=' font-bold flex justify-center items-center text-white bg-red-500 w-[250px] '>remove</button>
                            </div>
                        </div>
                    </div>
             </div>
            ))}
       </div>

          <div className=" flex justify-center fixed right-0 top-40 w-[50%]">
            <div className="flex flex-col  w-[50%] shadow-xl justify-center items-center p-20">
              <button onClick={() => dispatch(clear())} className='my-10 font-bold flex justify-center items-center h-[50px] text-white bg-red-500 w-[250px]'>Clear</button>
              <button className='font-bold flex justify-center items-center text-white bg-green-500 h-[50px] w-[250px]'>Total price: {totalPrice} LE</button>
            </div>
              </div>
     </div>
  )
}

export default Cart