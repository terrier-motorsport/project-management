"use server";

import {db} from "@/lib/db";
import {auth} from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const {userId} = auth();

    if (!userId) {
        return {
            error: "Unauthorized",
        };
    }

    const {title} = data;

    let board;

    try {
        board = await db.board.create({
            data: {
                title,
            }
        });
    } catch {
        return {
            error: "Failed to create."
        }
    }
    // Dashbaord?
    revalidatePath('/dashboard')
    return {data: board};
};

export const createBoard = createSafeAction(CreateBoard, handler);