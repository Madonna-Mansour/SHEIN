import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { CiUser } from "react-icons/ci";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/appSlice';



const login = () => {
   const [email , setEmail] = useState("")
   const [password , setPassword] = useState("")

   const naviget = useNavigate()
   const dispatch =useDispatch()

   const handleSubmit = (e) => {
        e.preventDefault()

        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                 setTimeout(() => {naviget("/")} ,500)
           
                 dispatch(
                  setUser({
                     id: user.id,
                     userName : user.displayName,
                     email: user.email,
              })
                 )
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
        });
    }


  return (
    <form onSubmit={handleSubmit}  className='flex justify-center items-center h-[100vh]'>
       <div className="w-[30%]">
          <h1 className='font-bold text-center my-4 text-[30px]'>Login</h1>
           <div className=" bg-gray-50 p-10 ">
                <div className="flex flex-col my-4">
                    <label htmlFor="">Email</label>
                    <input className='border border-gray-300 p-2 w-[100%] rounded-md mt-2 '
                    type="email"
                    id="email"
                    name='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='email' />
                </div>

                <div className="flex flex-col my-4">
                    <label htmlFor="">Password</label>
                    <input className='border border-gray-300 p-2 w-[100%] rounded-md mt-2 '
                    type="password"
                    id="password"
                    name='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='password' />
               </div>

             <button className='w-[100%] h-[40px] my-6 bg-purple-500 text-white rounded-md' type='submit'>login</button>
             <Link  to={"/registr"} className='flex justify-center'>regstir?</Link>

        </div>
        </div>
      
    </form>
  )
}

export default login