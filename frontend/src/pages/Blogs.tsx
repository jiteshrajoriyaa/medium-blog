import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skelaton } from "../components/Skelaton";
import { getName, useBlogs } from "../hooks"

export const Blogs = () =>{

    const {loading, blogs} = useBlogs();

    const name = getName();
    if(loading){
        return <div>
             <Appbar name={name}/>
        <div className="flex items-center justify-center flex-col">
            <Skelaton/>
            <Skelaton/>
            <Skelaton/>
            <Skelaton/>
        </div>
        </div>
    }
    return <div className="bg-white">
    <Appbar name={name} />
   
    <div className="w-screen mt-24 lg:mt-28 flex justify-center ">
        <div className="flex flex-col justify-center w-11/12 lg:w-2/5 ">
            {blogs.map((blog) => 
                <BlogCard 
                id = {blog.id}
                heading={blog.title} description = {blog.content}
                authorName = {blog.author.name || "Anonymus "}
                publishedDate ={"Dec 3, 2023"}
                imgSrc={blog.img} />
            )}
            </div>
    </div>
    </div>
}