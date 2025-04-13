"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface SupabaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const [supabaseClient] = useState(() => 
        createClientComponentClient<Database>()
    );
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    );
}

export default SupabaseProvider;
// This component is a wrapper for the Supabase client and provides session context to its children. 
// It uses the `createClientComponentClient` function to create a Supabase client instance 
// and passes it to the `SessionContextProvider` component. 
// The `useState` hook is used to ensure that the Supabase client is only created once when the component mounts.