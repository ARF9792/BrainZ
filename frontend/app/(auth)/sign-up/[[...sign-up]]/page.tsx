import { SignUp } from "@clerk/nextjs";


export default function SignUpPage() {
    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center">
            <SignUp />
        </div>
    );
}