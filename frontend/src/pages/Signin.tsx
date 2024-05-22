import { Appbar } from "../components/Appbar"
import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = ()=>{

    return (<div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
            <Auth type = "signin"/>
            <div className="hidden lg:block"><Quote/></div>
        </div>
        </div>
    )
}