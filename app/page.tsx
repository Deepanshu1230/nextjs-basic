import axios from "axios";
import { NextRequest } from "next/server";
import client from "@/db";



async function fetchdata() {
   const user =await client.user.findFirst();
        return {
        email:user?.email,
        password:user?.password,
        username:user?.username
    }
}
export default async function Home() {
  const data = await fetchdata();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div>Username:{data.username}</div>
      <div>Password:{data.password}</div>
      <div>Email:{data.email}</div>
    </div>
  );
}
