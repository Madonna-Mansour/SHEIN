import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, favorit } from '../redux/appSlice';
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import imgg from '../assets/black.avif'
// import imgg from '../assets/istockphoto-1018293976-612x612.jpg'



const Product = () => {
  const data = useLoaderData();
  const products = data.data;
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.appReducer.searchTerm);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const favorites = useSelector((state) => state.appReducer.favorit);

  return (
    <div className=''>
         {!searchTerm && (
            <div className='h-[600px] bg-cover text-white' style={{backgroundImage: `url(${imgg})`, backgroundRepeat:"no-repeat"}}>
              <div className="pt-[270px] ps-[100px]">
                <p className='text-[30px]'>New collection</p>
                <h1 className='text-[50px] font-bold'>Clothes 2025</h1>
              </div>
            </div>
          )}

      <div className='m-[30px] mb-4 grid grid-cols-2 mdl:grid-cols-3 lgl:grid-cols-4 xl:grid-cols-5 gap-6 justify-center p-0 md:p-14 items-stretch'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isFavorite = favorites.some((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="flex flex-col justify-between box-content  p-4  mb-4 bg-white rounded-lg shadow-md"
              >
                <div>
                  <img
                    className='w-[130px] h-[180px] object-contain mx-auto'
                    src={product.image}
                    alt={product.title}
                  />
                  <h1 className='my-4 text-sm font-medium line-clamp-2'>{product.title}</h1>
                </div>
                <div className="flex justify-between items-center mt-4">
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
                    <h3 className='text-red-600 text-sm'>SR {product.price}</h3>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-full text-gray-500 mt-8">
            لا يوجد منتجات تطابق البحث.
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
