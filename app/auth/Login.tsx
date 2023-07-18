"use client"

import {signIn} from "next-auth/react"

export default function Login() {
    return (
        <li className={"list-none"}>
            <button onClick={() => signIn()} 
                    className="text-sm bg-blue-400 text-gray-100 py-2 px-8 rounded-xl disabled:opacity-20">
                Sign In
            </button>
        </li>
    )
}