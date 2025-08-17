"use server"

import client from "@/db";

export async function Signup(username:string,email:string,password:string){
    

    try{

            await client.user.create({
            data:{
                username:username,
                password:password,
                email:email
            }
        })
       

        return true;

    }
    catch(e){


        return false;

    }
       
        
    
      
    
       
        

}