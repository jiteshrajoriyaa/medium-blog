import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios"

export interface Blog {
    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string
    },
    "img": string
}

export const useBlog = ({ id }: { id: string }) => {

    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    console.log(id)
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        )
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false)
            })
    }, [id])

    return {
        loading,
        blog
    }
}

export const useBlogs = () => {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        )
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false)
            })
    }, [])

    return {
        loading,
        blogs
    }
}

export const getName = () =>{
    
    const token = localStorage.getItem("token") || ""
    const tokenWithoutBearer = token.replace("Bearer ", "");
    const [payload]:any = tokenWithoutBearer?.split(".");
    const decodedPayload = JSON.parse(atob(payload));
    const name = decodedPayload.name;

    return name;
}
