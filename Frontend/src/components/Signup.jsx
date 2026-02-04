import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Login } from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
export const  Signup =()=> {

    const navigate = useNavigate();
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
        const userInfo ={
          fullname:data.fullname,
          email:data.email,
          password:data.password,
        }
        
      await axios.post("http://localhost:3000/user/signup",userInfo)
      .then((res)=> {
        console.log(res.data)
        if(res.data) {
          toast.success('SignUp successfully!');
          localStorage.setItem("Users",JSON.stringify(res.data.user));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((error)=>{
        if(error.response){
          console.log(error);
          // alert("Error: " + error.response.data.message)
          toast.error("Error: " + error.response.data.message)
          
        }
      })

        
  }

  return (
   <>
   <div className='flex h-screen items-center justify-center'>
    <div  className="modal modal-open ">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} >
      
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
        </Link>
  
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className="mt-4  space-y-2 ">
      <span>Name</span>
      <br />
      <input type="text" 
      placeholder="Enter your fullname " 
      className="w-80 px-3 border rounded outline-none"
       {...register("fullname", { required: true })}
       />
       <br />
          {errors.name && <span className="text-sm text-red-500">*name is required</span>}
    </div>
    <div className="mt-4  space-y-2 ">
      <span>Email</span>
      <br />
      <input type="email" 
      placeholder="Enter your email " 
      className="w-80 px-3 border rounded outline-none"
       {...register("email", { required: true })}
       />
       <br />
          {errors.email && <span className="text-sm text-red-500">*email is required</span>}
    </div>
    <div className="mt-4  space-y-2 ">
      <span >Password</span>
      <br />
      <input type="text" 
      placeholder="Enter your password" 
      className="w-80 px-3 border rounded outline-none"
      {...register("password",{required:true})}
      />
      <br />
      {errors.password && <span className='text-sm text-red-500'> *password is required</span>}
      </div> 
      {/* buttton  */}
      <div className="flex justify-around mt-4 ">
          <button className=" bg-pink-500 rounded-md p-1 px-3 text-white hover:bg-pink-700">
            Signup</button>
          <p className="text-xl">
            Have Account?{""} 
            
            <button className="underline  text-blue-500 cursor-pointer"
               onClick={()=>{document.getElementById('my_modal_3').showModal()}}
               >
              Login
              </button>
          {/* <Login/> removed to prevent nested forms */}
          </p>
          
      </div>
    </form>
          <Login/>
  </div>
</div>
   </div>
   </>
  )
}

