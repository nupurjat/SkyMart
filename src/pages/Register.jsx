
import React, { useContext, useEffect } from "react";
import {
  User,
  Mail,
  Lock,
  Zap,
  Star,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router";
import  {useForm} from "react-hook-form";
import { MyAuth } from "../context/AuthContext";

const Register = () => {
  let {register,reset,formState:{errors},handleSubmit}=useForm();
  let navigate= useNavigate();
  const {registerUsers, setRegisterUsers}=useContext(MyAuth)

 let formSubmit=(data)=>{
  let arr= [...registerUsers,data]
  setRegisterUsers(arr)
  alert("User is Registered")
   localStorage.setItem("registeruser",JSON.stringify(arr))
   navigate("/main")
 reset();
 }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-xl bg-[#0A0A0A] border border-lime-500/20 rounded-[ 32px] p-5 shadow-[0_0_50px_rgba(163,230,53,0.08)]">

        {/* Top Badge */}
        <div className="flex justify-center mb-3">
          <div className="px-4 py-1 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-xs font-semibold">
            ✨ CREATE ACCOUNT
          </div>
        </div>

        {/* Logo */}
        <div className="text-center mb-4">

          <div className="w-10 h-10 bg-lime-400 rounded-xl flex items-center justify-center mx-auto text-lg">
            🛒
          </div>

          <h1 className="text-3xl font-bold mt-2">
            <span className="text-white">Sky</span>
            <span className="text-lime-400">Mart</span>
          </h1>

          <p className="text-gray-400 mt-1 text-xs">
            Join thousands of creators shopping premium drops
          </p>

        </div>

       log {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)}>

          {/* Name */}
          <div className="mb-3">
            <label className="text-gray-300 text-xs font-semibold block mb-1">
              FULL NAME
            </label>

            <div className="bg-[#181818] border border-gray-800 rounded-lg px-3 py-2.5 flex items-center focus-within:border-lime-400 transition">
              <User size={16} className="text-gray-500" />

              <input
                {...register('name',{
                  required:" Name is required",
          
                })}
                type="text"
                placeholder="John Doe"
                className="bg-transparent outline-none ml-3 w-full text-white text-sm"
              />
              
            </div>
             {errors.name && <p className="text-red-700">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="text-gray-300 text-xs font-semibold block mb-1">
              EMAIL ADDRESS
            </label>

            <div className="bg-[#181818] border border-gray-800 rounded-lg px-3 py-2.5 flex items-center focus-within:border-lime-400 transition">
              <Mail size={16} className="text-gray-500" />

              <input
                 {...register('email',{
                  required:" Email is required",
                  pattern:{
                  value:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
                  message:"Enter valid email",}
              
                })}
                type="email"
                placeholder="you@example.com"
                className="bg-transparent outline-none ml-3 w-full text-white text-sm"
              />
              
            </div>

             {errors.email && <p className="text-red-700">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-xs font-semibold block mb-1">
              PASSWORD
            </label>

            <div className="bg-[#181818] border border-gray-800 rounded-lg px-3 py-2.5 flex items-center focus-within:border-lime-400 transition">
              <Lock size={16} className="text-gray-500" />

              <input
                {...register('password',{
                  required:"Password is required ",
                   pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must contain 8 characters, uppercase, lowercase, number and special character",
                      },
                })}
                type="password"
                placeholder="••••••••"
                className="bg-transparent outline-none ml-3 w-full text-white text-sm"
              />
             
            </div>
             {errors.password && <p className="text-red-700">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-2.5 rounded-xl bg-lime-400 text-black text-sm font-bold hover:bg-lime-300 transition"
          >
            Create Account →
          </button>

        </form>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4"></div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-2">

          <div className="bg-[#151515] border border-gray-800 rounded-lg py-2 text-center">
            <Zap
              className="mx-auto text-lime-400 mb-1"
              size={15}
            />
            <p className="text-gray-300 text-xs">
              Instant Drop
            </p>
          </div>

          <div className="bg-[#151515] border border-gray-800 rounded-lg py-2 text-center">
            <Star
              className="mx-auto text-lime-400 mb-1"
              size={15}
            />
            <p className="text-gray-300 text-xs">
              Rewards
            </p>
          </div>

          <div className="bg-[#151515] border border-gray-800 rounded-lg py-2 text-center">
            <ShieldCheck
              className="mx-auto text-lime-400 mb-1"
              size={15}
            />
            <p className="text-gray-300 text-xs">
              Buyer Safe
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-4 text-xs">
          Already have an account?

          <button onClick={()=>{navigate('/')}}
           className="text-lime-400 font-semibold ml-1 cursor-pointer">
            Log in
          </button>
        </p>

      </div>
    </div>
  );
};

export default Register;

