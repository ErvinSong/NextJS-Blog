'use client'

import {useState} from "react"
import {useMutation, useQueryClient} from "@tanstack/react-query"
import axios from "axios"

export default function CreatePost(){
    const [title, setTitle] = useState("")
    const [isDisabled, setIsDisabled] = useState(false)
    const queryClient = useQueryClient()
    const { mutate } = useMutation(
        async (title: string) =>
          await axios.post("/api/posts/addPost", {
            title,
          }),
        {
          onError: (error) => {
            console.log(error)
          },
          onSuccess: (data) => {
            queryClient.invalidateQueries(["posts"])
            setTitle("")
            setIsDisabled(false)
          },
        }
      )
    const submitPost = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsDisabled(true)
        mutate(title)
    }
    return (
        <form onSubmit={submitPost} className={"bg-green-300 my-8 p-8 rounded-lg"}>
            <div className={"flex flex-col my-4"}>
                <textarea
                    onChange={(e) => setTitle(e.target.value)}
                    name="title" 
                    value={title}
                    placeholder= "Enter text here..."
                    className={"text-lg p-4 rounded-lg text-black"}>
                </textarea>
            </div>
            <div className={"flex items-center justify-between gap-2"}>
                <p className={`font-bold text-sm ${title.length > 300 ? "text-red-700" : "text-gray-700"}`}>{`${title.length}/300`}</p>
                <button
                    disabled={isDisabled}
                    className={"bg-teal-600 text-sm text-white py-2 rounded-md px-6 disabled:opacity-25"}
                    type="submit"
                >
                    Create Post
                </button>
            </div>
        </form>
    )
}