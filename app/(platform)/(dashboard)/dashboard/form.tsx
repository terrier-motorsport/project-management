"use client"

import { create } from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom"

export const Form = () => {
    const intitalState = {message: "", errors: {}};

    const [state, dispatch] = useFormState(create, intitalState);

    return (
        <form action={dispatch}>
                <input
                    id ="title"
                    name="title"
                    type="string"
                    required
                    placeholder="Enter a board title"
                    className="border-black border p-1"
                />
                <Button type="submit">Submit</Button>
            </form>
    )
}