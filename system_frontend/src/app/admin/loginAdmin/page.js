"use client";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import FormAdmin from "./adminForm";


export default function LoginOwner() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100"> {/* Added min-h-screen for full height */}
            <div className="flex flex-col items-center border-2 border-gray-300 shadow-lg w-[500px] bg-white p-6 rounded-lg">
                <Image
                    src={logo}
                    alt="Logo" // Added alt attribute for accessibility
                    width={100}
                    height={100}
                />
                <h1 className="text-2xl font-bold mt-2 mb-6">admin Login</h1> {/* Added title for context */}
                <FormAdmin/>
            </div>
            <div className="text-center">
            <h1 className="mt-4">Are you a admin? <Link href="/admin/registerAdmin" className="text-blue-500 hover:underline">Register here</Link></h1>
            </div>
        </div>
    );
}
