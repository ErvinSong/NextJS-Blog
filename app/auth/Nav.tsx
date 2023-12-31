import Link from "next/link"
import Login from './Login'

export default async function Nav(){
    return (
        <nav className={"flex justify-between items-center py-8"}>
            <Link href={"/"}>
                <h1 className={"text-lg font-bold"}>
                    Send it.
                </h1>
            </Link>
            <ul>
                <Login />
            </ul>
        </nav>
    )
}