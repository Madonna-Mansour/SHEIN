import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, remove, clear } from '../redux/appSlice'
import { FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cart = () => {
  const products = useSelector((state) => state.appReducer.products);
  const dispatch = useDispatch();
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-[100vh] text-center px-4">
        <h1 className=' sm:text-[20px] md:text-[30px] mr-4'>The basket is empty, go to shopping</h1>
        <Link to={"/"} className='text-[40px]'> <FaShopify /></Link>
      </div>
    );
  }

  return (
    <div className="w-full p-10 grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* Products List */}
      <div className=''>
        <h1 className='font-bold text-[30px] mb-6'>ALL ITEMS</h1>
        {products.map((product) => (
          <div key={product.id} className="mt-10 flex flex-col xl:flex-row items-start xl:items-center border-b p-4 gap-6">
            <img className='w-[100px] h-[120px]' src={product.image} alt={product.title} />

            <div className="w-full">
              <h1>{product.title}</h1>

              <div className="flex flex-col xl:flex-row justify-between my-6 gap-4">
                <div className="flex flex-col ">
                  <p>Price: {product.price * product.quantity} LE</p>
                  <p>Pec: {product.quantity}</p>
                </div>

                <div className="flex justify-start mdl:justify-start gap-2 flex-wrap">
                  <button
                    onClick={() => dispatch(decrement(product.id))}
                    className="w-10 h-10 border border-red-500 font-bold flex justify-center items-center text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(increment(product.id))}
                    className="w-10 h-10 border border-green-500 font-bold flex justify-center items-center text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(remove(product.id))}
                    className="font-bold flex justify-center items-center text-white bg-red-500 h-10 w-[100px] xl:w-[250px]"
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="w-full xl:static xl:mt-10">
        <div
          className="
            flex justify-center 
            fixed bottom-0 left-0 w-full h-[70px] bg-white shadow-md
            xl:static xl:h-auto xl:w-[50%] xl:justify-start xl:shadow-none
          "
        >
          <div
            className="
              flex flex-row items-center justify-center gap-4 p-4 
              w-full xl:flex-col xl:items-center xl:justify-center xl:p-20
            "
          >
            <button
              onClick={() => dispatch(clear())}
              className="
                font-bold h-[45px] text-white bg-red-500 w-[45%]
                xl:my-4 xl:w-[250px]
              "
            >
              Clear
            </button>
            <button
              className="
                font-bold h-[45px] text-white bg-green-500 w-[45%]
                xl:w-[250px]
              "
            >
              Total price: {totalPrice} LE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
