import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, favorit } from '../redux/appSlice';
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Product = () => {
  const data = useLoaderData();
  const products = data.data;
  const dispatch = useDispatch();

  // ✅ جلب قيمة البحث من Redux
  const searchTerm = useSelector((state) => state.appReducer.searchTerm);

  // ✅ فلترة المنتجات بناءً على كلمة البحث من Redux
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const favorites = useSelector((state) => state.appReducer.favorit);

  return (
    <div className=''>
      {/* عرض المنتجات بعد الفلترة */}
      <div className='m-[70px] mb-4 grid grid-cols-2 md:grid-cols-3 mdl:grid-cols-5 gap-6 justify-center p-0 md:p-14'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isFavorite = favorites.some((item) => item.id === product.id);
            return (
              <div key={product.id} className="box-content border-4 p-2">
                <div>
                  <img className='w-[130px] h-[180px] scale-105 transition-all' src={product.image} alt="" />
                </div>
                <h1 className='my-4'>{product.title}</h1>
                <div className="flex justify-between items-center p-2">
                  <button
                    className='border border-black rounded-full w-12 h-8 flex justify-center items-center hover:bg-green-500 hover:text-white hover:border-none'
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product.id,
                          title: product.title,
                          image: product.image,
                          price: product.price,
                          quantity: 1,
                        })
                      )
                    }
                  >
                    <SlBasket />
                  </button>
                  <div className="flex items-center">
                    <button
                      className='mr-4 text-red-600 text-xl'
                      onClick={() =>
                        dispatch(
                          favorit({
                            id: product.id,
                            title: product.title,
                            image: product.image,
                            price: product.price,
                          })
                        )
                      }
                    >
                      {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                    </button>
                    <h3 className='text-red-600'>SR {product.price}</h3>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-full text-gray-500 mt-8">لا يوجد منتجات تطابق البحث.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
