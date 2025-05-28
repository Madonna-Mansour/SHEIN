import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='container mx-auto mt-40 pb-10 grid grid-cols-1 lg:grid-cols-2  '>
      <div className=" grid grid-cols-1 sml:grid-cols-3 ">

          <div className="my-2">
            <h5 className='font-bold'>COMPANY INFO</h5>
            <p>About SHEIN</p>
            <p>Fashion Blogger</p>
            <p>Social Responsibility</p>
            <p>Careers</p>
          </div>

          <div className="my-2">
            <h5 className='font-bold'>HELP & SUPPORT</h5>
            <p>Shipping Info</p>
            <p>Returns</p>
            <p>Refund</p>
            <p>How To Order</p>
            <p>How To Track</p>
            <p>Size Guide</p>
            <p>SHEIN VIP</p>
          </div>

          <div className="my-2">
            <h5 className='font-bold'>CUSTOMER CARE</h5>
            <p>Contact us</p>
            <p>Payment Method</p>
            <p>Bonus Point</p>
            <p>Klarna</p>
          </div>
      </div>
      
{/* hero */}
      <div className=""> 

        <div className="flex justify-center items-center  grid grid-cols-1 md:grid-cols-2 ">
          <div className=" my-2 ">
            <h1 className='my-2 '>FIND US ON</h1>
            <div className="flex w-[100%] ">
                <button><FaFacebookF /></button>
                <button className='mx-4'><FaInstagram /></button>
                <button><FaTwitter /></button>
                <button className='mx-4'><FaYoutube /></button>
                <button><FaPinterestP /></button>
                <button className='mx-4'><FaSnapchatGhost /></button>
                <button className='mx-4'><FaTiktok /></button>
                <button><FaLinkedin /></button>
            </div>
          </div>

          <div className="my-2">
             <h1 className='my-2'>APP</h1>
             <div className="">
                <button ><FaApple /></button>
                <button className='mx-4'><BsAndroid2 /></button>
             </div>
          </div>
         </div>

{/* sign */}
          <div className="">
            <h1 className='mb-2'>Sign up for SheIn style news</h1>
            <div className="flex ">
              <input type="text" className='border border-black p-2 w-[80%] rounded-none' placeholder='Your email address' />
              <button className='bg-black text-white w-40 '>Subscribe</button>
            </div>
            <p className='my-8'>By clicking the SUBSCRIBE button, you are agreeing to our Privacy & Cookie Policy </p>
          </div>
{/* sign */}
           <div className="">
             <h1 className='font-bold mb-2'>WE ACCEPT</h1>
             <div className="flex text-[36px]">
                <p><FaCcVisa /></p>
                <p className='mx-8'><FaCcMastercard /></p>
                <p><FaCcApplePay /></p>
                <p></p>
             </div>
           </div>

        </div>
  {/* hero */}

      </div>
  )
}

export default Footer