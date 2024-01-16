"use server";
import {db} from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z} from "zod";

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string;
}

const CreateBoard = z.object({
    title: z.string().min(3, {
        message: "Min title length of 3 characters is required"
    }),
})

export async function create(prevState: State, formData: FormData) {

    const validatedFields = CreateBoard.safeParse({
        title: formData.get("title"),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "missing fields"
        }
    }

    const {title} = validatedFields.data;

    try{
        await db.board.create({
            data: {
                title,
            }
        });
    } catch (error) {
        return {
            message: "Database error"
        }
    }

    revalidatePath("/dashboard");
    redirect("/dashboard");
    
}