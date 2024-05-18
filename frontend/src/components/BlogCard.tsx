import { Link } from "react-router-dom";

interface BlogCardProps {
    heading: string,
    description: string,
    authorName: string,
    publishedDate: string,
    imgSrc: string;
    id: string
}

export const BlogCard = ({ heading, description, authorName, publishedDate, imgSrc,id }: BlogCardProps) => {

    return <Link to={`/blog/${id}`}> 
    <div className="w-full mt-4">
        <div className="flex justify-between items-center">
            <div>
                <div className="flex gap-x-3 ">
                    <Avtar name={authorName} />
                    <div className="flex text-black font-semibold items-center">{authorName}</div>
                    <div className="pt-1 text-slate-500">&#x2022;</div>
                    <div className="flex items-center text-slate-500 text-sm font-semibold">{publishedDate}</div>
                </div>
                <div className="w-4/5 flex flex-col gap-y-2">
                    <div className=" text-2xl font-bold font-sans pt-2">{heading}</div>
                    <div className="font-semibold text-sm text-slate-500	">{description.slice(0, 100) + "..."}</div>
                    <div className="pt-6 text-xs text-slate-400">{`${Math.ceil(description.length / 100)} min read`}</div>
                </div>
            </div>
            <div className="flex justify-center items-center" >
                <img className="h-44 w-48 object-cover rounded-lg shadow-lg " src={imgSrc} alt="image description" />
            </div>
        </div>

        <div className="h-px w-4/5 my-8 border-0 dark:bg-gray-200"></div>
    </div>
    </Link>
}

export function Avtar({ name }: { name: string }) {

    return <>
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300 text-xs">{name[0]}</span>
        </div>
    </>

}