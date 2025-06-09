// get all journals by user id 
import { getAlljournalsByUserID } from "@/data/journals";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const journals = await getAlljournalsByUserID();
        return NextResponse.json(
            { journals},
            { status: 200 }
        );
    
    } catch (error) {
        console.error("Error fetching journals:", error);
        return NextResponse.json({ error: "Failed to fetch journals" }, { status: 500 });
    }
};