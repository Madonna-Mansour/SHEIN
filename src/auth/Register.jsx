// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { CiUser } from "react-icons/ci";


// const Register = () => {
//    const [name , setName] = useState("")
//    const [email , setEmail] = useState("")
//    const [password , setPassword] = useState("")
//    const [confirmPassword , setConfirmPassword] = useState("")

//    const naviget = useNavigate()

//    const handleSubmit = (e) => {
//         e.preventDefault()

//       const auth = getAuth();
//           createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//               // Signed up 
//               const user = userCredential.user;
//                 updateProfile(auth.currentUser , {
//                    displayName:name
//                 })
//               // ...
//               setTimeout(() => {
//                 naviget("/login")

//               },500)
//             })

//             .catch((error) => {
//               const errorCode = error.code;
//               const errorMessage = error.message;
//               // ..
//             });
//     }


//   return (
//     <form onSubmit={handleSubmit}  className='flex justify-center items-center h-[100vh]'>
//     <div className="w-[30%]">
//        <h1 className='font-bold text-center my-4 text-[30px]'>Create account</h1>
//         <div className=" bg-gray-50 p-10 ">
//              <div className="flex flex-col my-4">
//                 <label htmlFor="">Name</label>
//                 <input className='border border-gray-300 p-2 w-[100%] rounded-md mt-2 '
//                 type="text"
//                 id="name"
//                 name='name'
//                 required
//                 value={name}
//                  onChange={(e) => setName(e.target.value)}
//                  placeholder='name'
//                  />
//              </div>

//              <div className="flex flex-col my-4">
//                 <label htmlFor="">Email</label>
//                 <input className='border border-gray-300 p-2 w-[100%] rounded-md mt-2 '
//                 type="email"
//                 id="email"
//                 name='email'
//                 required
//                 value={email}
//                  onChange={(e) => setEmail(e.target.value)}
//                  placeholder='email' />
//              </div>

//              <div className="flex flex-col my-4">
//                 <label htmlFor="">Password</label>
//                 <input className='border border-gray-300 p-2 w-[100%] rounded-md mt-2 '
//                 type="password"
//                 id="password"
//                 name='password'
//                 required
//                 value={password}
//                  onChange={(e) => setPassword(e.target.value)}
//                  placeholder='password' />
//              </div>

//              <div className="flex flex-col my-4">
//                 <label htmlFor="">Confirm password</label>
//                 <input className='border border-gray-300 p-2 w-[100%] rounded-md mt-2 '
//                 type="password"
//                 id="confirmPassword"
//                 name='confirmPassword'
//                 required
//                 value={confirmPassword}
//                  onChange={(e) => setConfirmPassword(e.target.value)}
//                  placeholder='confirm Password' />
//              </div>
//              <button className='w-[100%] h-[40px] my-6 bg-purple-500 text-white rounded-md' type='submit'>Create</button><br />
//              <Link  to={"/login"} className='flex justify-center'>login?</Link>
//         </div>
//         </div>
      
//     </form>
//   )
// }

// export default Register