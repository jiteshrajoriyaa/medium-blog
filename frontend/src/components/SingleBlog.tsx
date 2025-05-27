import { Blog } from "../hooks";
import { Avtar } from "./BlogCard";

export const SingleBlog = ({ blog }: { blog: Blog }) => {

    return <div className="w-11/12 lg:w-5/12 flex flex-col gap-y-10">

        <LargeHeading content={blog.title} />
        <div className="flex flex-col gap-y-2">

            <div className="flex gap-x-2 font-bold text-xl items-center">
                <Avtar name={blog.author.name || "Anonymus"} />
                {blog.author.name || "Anonymous"}
            </div>
            <div className="text-sm lg:text-lg  text-slate-500">Dedicated Journalist: Uncovering Stories, Revealing Truths, and Informing the Public.</div>
            <div className="text-sm pt-4 text-slate-600 font-semibold">Posted on {dateFormatter(blog.createdAt)}</div>
        </div>
        <div className="lg:flex lg:justify-center">
            <img
                className="w-full lg:h-90 object-cover lg:object-contain max-h-96"
                src={blog.img} alt="img" />
        </div>

        <div className="lg:mt-10 font-serif lg:text-lg whitespace-pre-wrap">{blog.content}</div>
    </div>
}

function LargeHeading({ content }: { content: string }) {

    return <div className="text-4xl lg:text-6xl font-sans font-extrabold lg:font-bold">
        {content}
    </div>
}

export function dateFormatter(dateFromDB: string) {
    const date = new Date(dateFromDB);

    const formattedDateTime = `${date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })} - ${date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    })}`;

    return formattedDateTime
}