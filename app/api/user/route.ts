import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client=new PrismaClient();
export async  function POST(req:NextRequest){
    //extract the body 
    const body=await req.json();

    try{
        await client.user.create({
        data:{
            username:body.username,
            password:body.password,
            email:body.email
        }
    })
    console.log(body);

    return Response.json({
        message:"You are Logged in"
    },{
        status:411
    })

    }
    catch(e){
        return Response.json({
            message:"Error While Signup"
        })

    }
    
}

export async function GET(req:NextRequest){
    const user = await client.user.findFirst();

    return Response.json({
        email:user?.email,
        password:user?.password,
        username:user?.username
    })
}