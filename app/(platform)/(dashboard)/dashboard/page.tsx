
import {create} from "@/actions/create-board";

import {Button} from "@/components/ui/button";
import { db } from "@/lib/db";
import { Board } from "./board";
import { Form } from "./form";

const DashboardPage = async () => {

    const boards = await db.board.findMany();

    return (
        <div className="flex- flex-col space-y-4">
            Dashboard Page

            <Form/>
            
            <div className="space-y-2">
                {boards.map((board) => (
                    <Board key={board.id} title={board.title} id={board.id}/>
                ))}
            </div>
            
        </div>
    )
}

export default DashboardPage