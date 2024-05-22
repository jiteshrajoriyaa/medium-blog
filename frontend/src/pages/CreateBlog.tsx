import { useState } from "react"
import { AppBarForCreateBlog } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { getName } from "../hooks"


export const CreateBlog = () => {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState("");
    const navigate = useNavigate();

    const name = getName();

    return <div >
        <AppBarForCreateBlog name={name} />

        <div className="flex justify-center md:pl-20 lg:pl-36 mt-28 md:w-screen lg:w-4/5">
            <div className="flex gap-x-6 w-11/12">
                <div> <img className="h-8 mb-8" src="https://www.svgrepo.com/show/522230/plus-circle.svg" alt="image" /> </div>
                <div className="w-full">
                    <textarea onChange={(e) => {
                        setTitle(e.target.value)
                    }} className="font-medium text-5xl font-serif text-black w-full focus:outline-none resize-none " placeholder="Title"></textarea>

                    <form>
                        <div className="w-full mb-4 rounded-lg ">
                            <div>
                                <textarea onChange={(e) => {
                                    setDes(e.target.value)
                                }} id="comment" rows={16} className=" px-0   bg-white border-0  focus:ring-0 font-medium text-black text-xl font-serif w-full focus:outline-none resize-none " placeholder="Tell your story..." required ></textarea>
                            </div>
                        </div>
                    </form>
                    
                    <input type="text" placeholder="Paste your img url here" 
                    className="text-gray underline border border-gray-400 rounded-md pl-2 p-1 font-semibold" 
                            onChange={(e)=>{
                                setImg(e.target.value)
                            }}/>
                    <div className="flex items-center justify-between py-4 ">
                                <button onClick={async () => {
                                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,
                                        {
                                            title,
                                            content: des,
                                            img
                                        }, {
                                            headers: {
                                                Authorization: localStorage.getItem("token")
                                            }
                                    }
                                    );
                                    console.log(response.data.id)
                                    navigate(`/blog/${response.data.id}`)
                                }} type="submit" 
                                className="inline-flex items-center py-2.5 px-4 text-s font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-200 ">
                                    Publish
                                </button>
                            </div>
                </div>
            </div>
        </div>


        {/* 
         */}
    </div>
} 