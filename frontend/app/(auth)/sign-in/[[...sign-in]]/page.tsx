import { SignIn } from "@clerk/nextjs";

export default function(){
    return(
        <div className="bg-black min-h-screen flex items-center justify-center">
            <SignIn/>
        </div>
    )
}