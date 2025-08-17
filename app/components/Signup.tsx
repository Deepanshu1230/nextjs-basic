"use client"

import axios from "axios";
import { useState } from "react"
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { Signup } from "../actions/user";


export default function(){
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const [username,setUsername]=useState("");
    const router=useRouter();
    

    return (
        <div className=" w-full  h-screen flex flex-col items-center justify-center ">
           <div className="flex flex-col items-center justify-center border px-10 py-10 rounded-4xl">

            <div className="font-bold text-3xl">
                Signup
            </div>
            <div className="pt-3">
                <p className="font-semibold">Username</p>
                <input onChange={(e) => {
                    setUsername(e.target.value);
                    
                }} className="border rounded-lg px-5 py-2" type="text" placeholder="Username" />
            </div>
            <div className="pt-3">
                <p className="font-semibold">Email</p>
                <input onChange={(e) => {
                    setemail(e.target.value);
                }} className="border rounded-lg px-5 py-2" type="text" placeholder="Email" />
            </div>
            <div className="pt-3">
                <p className="font-semibold">Password</p>
                <input
                 onChange={(e) => {
                    setpassword(e.target.value);

                 }}
                className="border rounded-lg px-5 py-2" type="text" placeholder="password" />
            </div>


            <div>
                <button 
                onClick={() => {
                    Signup(username,password,email);
                    router.push("/");
                }} className="bg-blue-500 text-white font-semibold rounded-2xl px-4 py-2 mt-4 text-center w-[200px] ">Signup</button>
            </div>

            


           </div>
            
        </div>
    )
}