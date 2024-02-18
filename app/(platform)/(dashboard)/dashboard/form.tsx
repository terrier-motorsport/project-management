"use client"

import { create } from "@/actions/create-board"
import { useFormState } from "react-dom"
import { FormInput } from "./form-input"
import { FormButton } from "./form-button"

export const Form = () => {
    const intitalState = {message: "", errors: {}};

    const [state, dispatch] = useFormState(create, intitalState);

    return (
        <form action={dispatch}>
        <div className="flex flex-col space-y-2">
            <FormInput errors={state?.errors} />
        </div>
        <FormButton/>
    </form>
    )
}