import { Blog } from "../hooks";
import { Avtar } from "./BlogCard";

export const SingleBlog = ({blog}: {blog:Blog})=>{

    return <div className="w-4/5 flex gap-x-16">
            <div className="flex flex-col gap-y-2 max-w-lg">
                <LargeHeading content={blog.title}/>
                <div className="text-sm text-slate-400 font-semibold">Posted on August 21, 2024</div>
                <div className="text-justify">{blog.content}</div>
            </div>
            <div className="flex flex-col gap-y-2">
                    <div className="text-slate-600 font-bold">Author</div>
                    <div className="flex gap-x-4 font-bold text-xl items-center">
                    <Avtar name={blog.author.name || "Anonymus"}/>
                        {blog.author.name || "Anonymous"}
                    </div>
                    <div className="pl-12 text-xs  text-slate-500">Master of Joke, purveyor of puns, and the funniest person in the Kingdom</div>
            </div>
        </div>
}

function LargeHeading({content}: {content: string}){

    return <div className="text-4xl font-sans font-extrabold">
            {content}
    </div>
}