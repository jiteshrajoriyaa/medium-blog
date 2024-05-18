import { Link, useNavigate } from "react-router-dom"
import { Avtar } from "./BlogCard"

export const Appbar = () => {

    return <div className="w-screen bg-white  fixed top-0  z-10">
        <div className="flex justify-center">
            <div className="w-4/5 h-20 flex items-center justify-between ">
               <Link to={"/blogs"} ><div>
                    <img
                        className="h-12 w-52"
                        src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png" alt="image description" />
                </div>
                </Link> 
                <div className="text-sm text-gray-600 font-light">
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-x-8 text-sm ">
                        <div>Our Story</div>
                        <div>Membership</div>
                        <div>Write</div>
                        <div>Sign in</div>
                    </div>
                    <div className="flex self-center bg-lime-600 shadow-lg text-white font-medium rounded-3xl px-6 text-sm py-3 ml-5"><Link to={"/signup"}>Get started</Link></div>
                </div>
            </div>
        </div>
        <div className="h-px  border-0 bg-gray-500 shadow-lg"></div>
    </div>
}

export const AppBarForCreateBlog = ({name}: {name: string})=>{
    
    const navigate = useNavigate();
    return <div className="w-screen fixed top-0  z-10">
        <div className="flex justify-center">
            <div className="md:w-full md:px-3 lg:w-4/5 h-20 flex items-center justify-between ">
               <Link to={"/blogs"} ><div className="flex items-center"><div>
                    <img
                        className="h-10 "
                        src="data:image/png;base64,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" alt="image description" />
                </div>
                <div className=" text-stone-600  text-base ml-3"> Drafts as {name || "Anonymous"}
                </div>
                </div>
                </Link> 

                <div className="flex justify-between items-center gap-x-6">
                    <div className="flex self-center bg-lime-700 shadow-md text-white font-medium rounded-3xl px-3 text-sm py-1"><button onClick={()=>{
                            navigate("/new-story")
                    }} >new</button></div>
                    <div>
                        <img className="h-6 "
                        src="https://www.svgrepo.com/show/525438/menu-dots.svg" alt="image" />
                    </div>
                    <div>
                        <img className="h-6" src="https://www.svgrepo.com/show/522427/notification-bell-on.svg" alt="" />
                    </div>
                    <Avtar name = {name || "Anonymous"} />
                </div>
            </div>
        </div>
    </div>
}
