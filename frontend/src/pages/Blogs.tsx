import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skelaton } from "../components/Skelaton";
import { useBlogs } from "../hooks"

export const Blogs = () =>{

    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>
             <Appbar/>
        <div className="flex items-center justify-center flex-col">
            <Skelaton/>
            <Skelaton/>
            <Skelaton/>
            <Skelaton/>
        </div>
        </div>
    }
    
    return <div className="bg-white">
    <Appbar  />
   
    <div className="w-auto mt-20 md:pl-28 lg:pl-48">
        <div className="flex md:w-4/5 lg:w-2/5 flex-col">
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