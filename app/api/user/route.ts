import { NextRequest } from "next/server";
import client from "@/db";


export async  function POST(req:NextRequest){

}

// export async function GET(req:NextRequest){
   

//     try{
//         const user =await client.user.findFirst();
//         return Response.json({
//         email:user?.email,
//         password:user?.password,
//         username:user?.username
//     })

//     }
//     catch(e){
//         console.log(e);
//         return Response.json({
//             message:"There is Problem in Parsing"
            
//         })

//     }

    
// }