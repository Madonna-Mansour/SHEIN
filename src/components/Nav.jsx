import React from 'react';
import { Link } from 'react-router-dom';
import { TbWorld } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { logOut, setSearchTerm } from '../redux/appSlice'; // ✅ تم التعديل هنا
import { getAuth, signOut } from "firebase/auth";

const Nav = () => {
  const user = useSelector((state) => state.appReducer.userInfo);
  const searchTerm = useSelector((state) => state.appReducer.searchTerm);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(logOut());
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className='flex justify-between items-center p-4 font-bold border border-b'>
      <div>
        <h1 className='text-[35px] xs:text-[20px] md:text-[35px]'>SHEIN</h1>
      </div>

      <div className="flex">
        <input
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className='w-[400px] h-10 p-4 border border-black  xs:w-[90px] md:w-[400px] rounded-none'
          type="text"
        />
        <button className='w-[40px]  text-white flex justify-center items-center text-[27px] h-10 bg-black'>
          <IoIosSearch />
        </button>
      </div>

      <div className="flex justify-between items-center text-[20px]">
        <div>
          {user ? (
            <p>{user.userName}</p>
          ) : (
            <Link to="/registr"><IoPersonOutline /></Link>
          )}
        </div>
        <div className="mx-4">
          <Link  to={"/cart"}><SlBasket /></Link>
        </div>
        {user && (
          <div>
            <button className='mr-4' onClick={handleLogOut}><IoIosLogOut /></button>
          </div>
        )}
        <div>
          <Link to={"/favorit"}><MdFavoriteBorder /></Link>
        </div>
        <div className="mx-4 hidden md:flex">
          <RiCustomerService2Fill />
        </div>
        <div className='hidden md:flex'>
          <TbWorld />
        </div>
      </div>
    </div>
  );
};

export default Nav;
