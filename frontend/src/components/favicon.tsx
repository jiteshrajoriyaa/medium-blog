import { useEffect } from "react"

export const Favicon = ({href}: {href: string}) =>{
    useEffect(()=>{
        const link = document.createElement("link");
        link.rel = 'icon';
        link.href = href;

        const existingIcon = document.head.querySelector("link[rel='icon']")
        if(existingIcon){
            document.head.removeChild(existingIcon);
        }

        document.title = "Medium"
        document.head.appendChild(link);
    },[])

    return null
}