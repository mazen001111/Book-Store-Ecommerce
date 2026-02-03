import { create } from "zustand";
import { persist } from "zustand/middleware";

export const setIndex =create((set)=>({
    index:false,
    indexTrue:()=>set(()=>({index:true})),
    indexFalse:()=>set(()=>({index:false}))
}))

export const user =create(persist((set)=>({
    name:"",
    email:"",
    photo:'',
    setName:(userName)=>set(()=>({name:userName})),
    setEmail:(userEmail)=>set(()=>({email:userEmail})),
    setPhoto:(userPhoto)=>set(()=>({Photo:userPhoto})),

}),
{
    name:"user"
}

))