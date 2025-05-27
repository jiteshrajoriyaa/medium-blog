import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { dateFormatter } from "../components/SingleBlog";
import { Skelaton } from "../components/Skelaton";
import { getName, useBlogs } from "../hooks"

export const Blogs = () =>{

    const {loading, blogs} = useBlogs();

    const name = getName();
    if(loading){
        return <div>
             <Appbar name={name}/>
        <div className="flex items-center justify-center flex-col ml-72">
            <Skelaton/>
            <Skelaton/>
            <Skelaton/>
            <Skelaton/>
        </div>
        </div>
    }
    return <div className="bg-white">
    <Appbar name={name} />
   
    <div className="mt-24 lg:mt-28 flex justify-center ">
        <div className="flex flex-col justify-center w-11/12 lg:w-2/5 ">
            {blogs.map((blog) => 
                <BlogCard 
                key={blog.id}
                id = {blog.id}
                heading={blog.title} description = {blog.content}
                authorName = {blog.author.name || "Anonymus "}
                publishedDate ={dateFormatter(blog.createdAt)}
                imgSrc={blog.img} />
            )}
            </div>
    </div>
    </div>
}