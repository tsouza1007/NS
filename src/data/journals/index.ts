//functions for all analytics

// getAlljournals

import { supabase } from "@/utils/supabase/client";

export const getAlljournalsByUserID = async () => {
    // const {
    //     data: { user },
    //     error: userError,
    // } = await supabase.auth.getUser();

    // if (userError || !user) {
    //     console.error("Error fetching user:", userError);
    //     return [];
    // }

    const { data, error } = await supabase
        .from("journal_entries")
        // read the user id from the session
        .select("*")
        // .eq("user_id", "0f71ac63-4218-4fdf-a4b7-3c90a89736cb")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching journals:", error);
        return [];
    }
    console.log(data)

    return data;
}

// getCurrentStreakByUserID
     // for the authenticated user, get the 
     // timestamp and calculate the current streak via timestamp under the user id 

// getMoodFromJournals 
    // getAlljournalsByUserID
    // return only average of mood entries 


//function for getJournalByID
export const getJournalByID = async (id: string) => {
    const { data, error } = await supabase
        .from("journals_entries")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error("Error fetching journal by ID:", error);
        return null;
    }

    return data;
}



