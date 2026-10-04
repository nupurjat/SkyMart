import React, { useContext } from "react";
import {
  Mail,
  Lock,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router";
import { MyAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const {loginUSer, setLoginUSer,registerUsers}=useContext(MyAuth)
  let{reset,register,handleSubmit , formState:{errors}}=useForm();
  let navigate=useNavigate();

  let formSubmit=(data)=>{
    let user=registerUsers.find((val)=>{
      return val.email=== data.email && val.password=== data.password
    })
    if(!user){
      toast.error("invaild creds or user not found")
      reset()
      return 
    }
    setLoginUSer(user)
    toast.success("Successfylly Logged in")
    localStorage.setItem("loggedinUSer",JSON.stringify(user))
    navigate("/main")
    reset()
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[ 200px] h-[ 300px] bg-lime-500/10 blur-[150px] rounded-full"></div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-[#0B0B0B] border border-lime-500/20 rounded-3xl p-6 shadow-[0_0_40px_rgba(163,230,53,0.08)]">

        {/* Top Badge */}
        <div className="flex justify-center mb-4">
          <div className="px-5 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-sm font-semibold">
            MEMBER PORTAL
          </div>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center mb-5">

          <div className="flex justify-center items-center gap-3">
            <div className="w-7 h-7 rounded-2xl bg-lime-400 flex items-center justify-center shadow-lg shadow-lime-500/30">
            </div>

            <h1 className="text-4xl font-bold">
              <span className="text-white">Sky</span>
              <span className="text-lime-400">Mart</span>
            </h1>
          </div>

          <p className="text-gray-400 mt-2 text-center text-sm">
            Enter your credentials to access your account
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)}>

          {/* Email */}
          <div className="mb-4">
            <label className="text-gray-300 text-sm font-semibold block mb-2">
              EMAIL ADDRESS
            </label>

            <div className="flex items-center bg-[#161616] border border-gray-800 rounded-xl px-4 py-3 focus-within:border-lime-400 transition">

              <Mail size={18} className="text-gray-500" />

              <input
              {...register ('email',{
                required : "email is required",
              })}
                type="email"
                placeholder="you@example.com"
                className="bg-transparent outline-none w-full ml-3 text-white"
              />

            </div>
             {errors.email && <p className="text-red-700">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm font-semibold block mb-2">
              PASSWORD
            </label>

            <div className="flex items-center bg-[#161616] border border-gray-800 rounded-xl px-4 py-3 focus-within:border-lime-400 transition">

              <Lock size={18} className="text-gray-500" />

              <input
                {...register ('password',{
                  required: "Password is required",
                     
              })}
                type="password"
                placeholder="••••••••"
                className="bg-transparent outline-none w-full ml-3 text-white"
              />

            </div>
             {errors.password && <p className="text-red-700">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-300 text-black font-bold py-3 rounded-xl mt-5 transition-all duration-300 hover:scale-[1.02]"
          >
            Sign In →
          </button>

        </form>

        {/* Divider */}
        <div className="border-t border-gray-800 my-5"></div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3">

          <div className="bg-[#151515] border border-gray-800 rounded-xl py-2.5 flex justify-center items-center gap-2 text-gray-300 text-sm">

            <Zap size={16} className="text-lime-400" />

            Fast Checkout

          </div>

          <div className="bg-[#151515] border border-gray-800 rounded-xl py-2.5 flex justify-center items-center gap-2 text-gray-300 text-sm">

            <ShieldCheck size={16} className="text-lime-400" />

            Encrypted

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-5 text-sm">
          Don't have an account?

           <button onClick={()=>{navigate('/register')}} className="text-lime-400 font-semibold cursor-pointer">
            Sign up for free
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;
