import {  SignupInput } from "@jiteshrajoriya/medium-blog-common";
import axios from "axios";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`, postInputs)
            const token = response.data.token;
            localStorage.setItem("token", "Bearer " + token);
            navigate("/blogs");
        }catch(e){
            alert("Error while signing up")
        }
    }

    return <div className="flex flex-col justify-center items-center lg:w-7/12 h-screen" >
        <div className="w-9/12 flex gap-y-8	flex-col">
            
            <div>
                <div className="text-center text-3xl font-bold font-sans ">
                    {type === "signup" ? "Create an account" : "Welcome back"}
                </div>
                <div className="text-center text-slate-500	 text-1xl font-semibold font-sans ">
                    {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                    <Link className="underline pl-2" to={type === "signin" ? "/signup": "/signin"}>{type === "signin" ? "Sign Up": "Sign In"}</Link>
                </div>
            </div>

            <div className="flex flex-col gap-y-5">
            {type === "signup" ? <InputHeadingWithPlaceholder label = "Name" placeholder="Enter your name" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    name: e.target.value
                })
            }}/>: <></>}
            <InputHeadingWithPlaceholder label = "Email" placeholder="Enter your email id" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    email: e.target.value
                })
            }}/>
            <InputHeadingWithPlaceholder label = "Password" type = "password" placeholder="" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                })
            }}/>
            
            </div>

            <button 
            onClick={sendRequest}
            className="bg-black text-white p-2 font-sans rounded-md font-semibold " >{type === "signup"? "Sign Up" : "Sign In"}</button>
        <div className="text-center text-slate-500	 text-sm pt-10 font-sm font-sans">Click “Sign in” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</div>
    </div>
        </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: any)=>void; 
    type?: string
}
const InputHeadingWithPlaceholder = ({label,type,placeholder, onChange}: LabelledInputType) => {
    return <div className="flex flex-col">
        <div className="font-semibold">{label}</div>
        <div >
            <input className="border-2 border-gray-200 rounded-md p-1 pl-3 mt-1 w-full font-medium focus:outline-none focus:border-blue-200"
            onChange={onChange}
            type=  {type || "text"}
            placeholder={placeholder}/>
        </div>
    </div>
}