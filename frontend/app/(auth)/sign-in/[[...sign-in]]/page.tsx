import { SignIn } from "@clerk/nextjs";


export default function SignInPage() {
    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center">
            <SignIn />
        </div>
    );
}